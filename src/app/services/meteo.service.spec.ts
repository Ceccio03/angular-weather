import { TestBed } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MeteoService', () => {
  let service: MeteoService;
  let client: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    client = TestBed.inject(HttpClient);
    service = TestBed.inject(MeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create forecast array', () => {
    const testObj = {
      
    };

    const array = service.createForecastArray(testObj);

    expect(array).toBeTruthy();
  });

  it('forecast array should have 3 elements', () => {
    const testObj = {
      
    };

    const array = service.createForecastArray(testObj);

    expect(array.length).toEqual(3);
  });

  it('forecast array should have 3 elements', () => {
    const testObj = {
      
    };
    
    const comparisonObj = {
      time: new Date('2023-10-09T00:00'),
      cloudCover: 82,
      windSpeed: 2.1,
      precipitation: 0,
      humidity: 93,
      temperature: 19.5,
      weatherCode: 2,
      cloudCoverUnit: '%',
      windSpeedUnit: 'km/h',
      precipitationUnit: '%',
      humidityUnit: '%',
      temperatureUnit: '°C'
    };

    const array = service.createForecastArray(testObj);

    expect(array[0]).toEqual(comparisonObj);
  });

  it('should convert km/h to Knot', () => {
    const startingSpeed = 100;
    const speedKn = 54;
    const result = service.fromKmToKnot(startingSpeed);

    expect(result).toEqual(speedKn);
  });
});