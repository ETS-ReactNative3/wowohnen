import json

from urllib.request import urlopen
import rasterio
import gzip
import io
from pyproj import Proj, transform

from get_cities import read_cities_geojson
from utils import save_as_geojson


def download_sunshine():
    url = "https://opendata.dwd.de/climate_environment/CDC/grids_germany/annual/sunshine_duration/grids_germany_annual_sunshine_duration_201817.asc.gz"
    response = urlopen(url)
    compressed_file = io.BytesIO(response.read())
    decompressed_file = gzip.GzipFile(fileobj=compressed_file)

    return decompressed_file


def merge_sunshine_to_cities(sunshine_raster, cities_df):
    def get_raster_value_for_coordinates(coordinates, raster_file):
        inProj = Proj(init='epsg:4326')
        outProj = Proj(init='epsg:31467')
        x, y = transform(inProj, outProj, coordinates[0], coordinates[1])
        val = next(raster_file.sample([(x, y)]))
        return val[0]

    with rasterio.open(sunshine_raster) as raster_file:
        cities_df['sunshine'] = cities_df.apply(
            lambda row: get_raster_value_for_coordinates(row['coordinates'], raster_file), axis=1)

    return cities_df


if __name__ == '__main__':
    sunshine_raster = download_sunshine()

    cities_df = read_cities_geojson()
    cities_with_sunshine_df = merge_sunshine_to_cities(
        sunshine_raster, cities_df)

    save_as_geojson(cities_with_sunshine_df)
