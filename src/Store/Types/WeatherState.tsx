export type Weather = {
    description: string;
    icon: string;
    id: number;
    main: string;
}
  
export type WeatherData = {
    base: string;
    clouds: {
      all: number;
    };
    cod: number;
    coord: {
      lon: number;
      lat: number;
    };
    dt: number;
    id: number;
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    name: string;
    sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset: number;
      type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
      speed: number;
      deg: number;
    };
}

export type WeatherError = {
  cod: string;
  message: string;
}

export type WeatherState  = {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}