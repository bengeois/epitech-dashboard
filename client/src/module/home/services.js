export const services = [
    {
        name: 'Select a service',
        widgets: []
    },
    {
        name: 'Twitter',
        widgets: [
            {
                name: 'Last tweets',
                urlClient: '/home/widget/twitter/last-tweets/',
                urlRequest: '/service/twitter/last-tweets/'
            },
            {
                name: 'Search',
                urlClient: '/home/widget/twitter/search/',
                urlRequest: '/service/twitter/search/'
            }
        ]
    },
    {
        name: 'Youtube',
        widgets: [
            {
                name: 'Last videos of a channel',
                urlClient: '/home/widget/youtube/last-videos-of-a-channel/',
                urlRequest: '/service/youtube/last-videos-channel/'
            },
            {
                name: 'Display channel subscribers',
                urlClient: '/home/widget/youtube/display-channel-subscribers/',
                urlRequest: '/service/youtube/channel-subscribers/'
            }
        ]
    },
    {
        name: 'Weather',
        widgets: [
            {
                name: 'City\'s Weather in Celsius or Fahrenheit',
                urlClient: '/home/widget/weather/city-weather/',
                urlRequest: '/service/weather/city-meteo/'
            }
        ]
    }
];