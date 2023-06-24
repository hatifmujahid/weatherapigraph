# Weather API GraphQL Server

This project aims to create a GraphQL API server in Node.js that fetches weather data from an external Weather API and provides a standardized response with the following fields:

- `name`: The name of the location.
- `weather`: Weather information containing the following subfields:
  - `id`: The weather condition ID.
  - `main`: A brief description of the weather condition.
  - `description`: A detailed description of the weather condition.
  - `icon`: An icon representing the weather condition.
- `main`: Main weather information including:
  - `temp`: The temperature in Celsius.
  - `feels_like`: The "feels like" temperature in Celsius.
  - `temp_min`: The minimum temperature in Celsius.
  - `temp_max`: The maximum temperature in Celsius.
  - `humidity`: The humidity percentage.
- `wind`: Wind information including:
  - `speed`: The wind speed in meters per second.
  - `deg`: The wind direction in degrees.
- `sys`: Additional system information including:
  - `country`: The country code.

## Prerequisites

To run this project, you need to have the following software installed:

- Node.js (version 14 or above)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine or download and extract the ZIP file.

```shell
git clone https://github.com/your-username/weather-api-graphql-server.git
```

2. Navigate to the project directory.

```shell
cd weather-api-graphql-server
```

3. Install the dependencies.

```shell
npm install
```

4. Rename the `.env.example` file to `.env` and provide the necessary API credentials or configuration values.

## Usage

1. Start the GraphQL server.

```shell
npm start
```

2. Open your web browser and access `http://localhost:3000/graphql` to access the GraphQL playground.

3. Write and execute GraphQL queries to fetch weather data.

```graphql
query {
  getWeather(lat:$lat, lon:$lon) {
    name
    weather {
      id
      main
      description
      icon
    }
    main {
      temp
      feels_like
      temp_min
      temp_max
      humidity
    }
    wind {
      speed
      deg
    }
    sys {
      country
    }
  }
}
```

Replace `lat` and `lon` with the coordinates of the desired location.

## snapshot 
![image](https://github.com/hatifmujahid/weatherapigraph/assets/56687118/62c659ba-6da3-4f4f-b5f4-a18eaed69ae4)


## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request. Make sure to follow the existing code style and write appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.
