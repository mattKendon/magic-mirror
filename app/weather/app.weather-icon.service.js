/**
 * Created by Matthew on 20/05/2015.
 */

angular
    .module('app')
    .factory('weatherIconService', weatherIconService);

function weatherIconService() {
    var service = {
        get: get
    };

    return service;

    /////////////////////////////

    function get(weather, day) {

        var dictionary = {
            //thunderstorms
            200: {meaning: "thunderstorm with light rain", icon: {day: "day-thunderstorm", night: "night-thunderstorm"}},
            201: {meaning: "thunderstorm with rain", icon: {day: "day-thunderstorm", night: "night-thunderstorm"}},
            202: {meaning: "thunderstorm with heavy rain", icon: {day: "day-thunderstorm", night: "night-thunderstorm"}},
            210: {meaning: "light thunderstorm", icon: {day: "day-lightning", night: "night-lightning"}},
            211: {meaning: "thunderstorm", icon: {day: "day-lightning", night: "night-lightning"}},
            212: {meaning: "heavy thunderstorm", icon: {day: "day-lightning", night: "night-lightning"}},
            221: {meaning: "ragged thunderstorm", icon: {day: "day-lightning", night: "night-lightning"}},
            230: {meaning: "thunderstorm with light drizzle", icon: {day: "day-storm-showers", night: "night-storm-showers"}},
            231: {meaning: "thunderstorm with drizzle", icon: {day: "day-storm-showers", night: "night-storm-showers"}},
            232: {meaning: "thunderstorm with heavy drizzle", icon: {day: "day-storm-showers", night: "night-storm-showers"}},
            //drizzle
            300: {meaning: "light intensity drizzle", icon: {day: "day-sprinkle", night: "night-sprinkle"}},
            301: {meaning: "drizzle", icon: {day: "day-sprinkle", night: "night-sprinkle"}},
            302: {meaning: "heavy intensity drizzle", icon: {day: "day-sprinkle", night: "night-sprinkle"}},
            310: {meaning: "light intensity drizzle rain", icon: {day: "day-rain-mix", night: "night-rain-mix"}},
            311: {meaning: "drizzle rain", icon: {day: "day-rain-mix", night: "night-rain-mix"}},
            312: {meaning: "heavy intensity drizzle rain", icon: {day: "day-rain-mix", night: "night-rain-mix"}},
            313: {meaning: "shower rain and drizzle", icon: {day: "day-showers", night: "night-showers"}},
            314: {meaning: "heavy shower rain and drizzle", icon: {day: "day-showers", night: "night-showers"}},
            321: {meaning: "shower drizzle", icon: {day: "day-showers", night: "night-showers"}},
            //rain
            500: {meaning: "light rain", icon: {day: "day-rain-mix", night: "night-rain-mix"}},
            501: {meaning: "moderate rain", icon: {day: "day-rain", night: "night-rain"}},
            502: {meaning: "heavy intensity rain", icon: {day: "day-rain", night: "night-rain"}},
            503: {meaning: "very heavy rain", icon: {day: "day-rain", night: "night-rain"}},
            504: {meaning: "extreme rain", icon: {day: "day-rain-wind", night: "night-rain-wind"}},
            511: {meaning: "freezing rain", icon: {day: "day-hail", night: "night-hail"}},
            520: {meaning: "light intensity shower rain", icon: {day: "day-showers", night: "night-showers"}},
            521: {meaning: "shower rain", icon: {day: "day-showers", night: "night-showers"}},
            522: {meaning: "heavy intensity shower rain", icon: {day: "day-showers", night: "night-showers"}},
            531: {meaning: "ragged shower rain", icon: {day: "day-showers", night: "night-showers"}},
            //snow
            600: {meaning: "light snow", icon: {day: "day-snow", night: "night-snow"}},
            601: {meaning: "snow", icon: {day: "day-snow", night: "night-snow"}},
            602: {meaning: "heavy snow", icon: {day: "day-snow", night: "night-snow"}},
            611: {meaning: "sleet", icon: {day: "day-sleet", night: "night-alt-sleet"}},
            612: {meaning: "shower sleet", icon: {day: "day-sleet", night: "night-alt-sleet"}},
            615: {meaning: "light rain and snow", icon: {day: "day-snow", night: "night-snow"}},
            616: {meaning: "rain and snow", icon: {day: "day-snow", night: "night-snow"}},
            620: {meaning: "light shower snow", icon: {day: "day-snow", night: "night-snow"}},
            621: {meaning: "shower snow", icon: {day: "day-snow", night: "night-snow"}},
            622: {meaning: "heavy shower snow", icon: {day: "day-snow", night: "night-snow"}},
            //atmosphere
            700: {meaning: "mist", icon: {day: "day-fog", night: "night-fog"}},
            711: {meaning: "smoke", icon: {day: "day-smoke", night: "night-smoke"}},
            721: {meaning: "haze", icon: {day: "day-haze", night: "night-fog"}},
            731: {meaning: "sand, dust whirls", icon: {day: "day-dust", night: "night-dust"}},
            741: {meaning: "fog", icon: {day: "day-fog", night: "night-fog"}},
            751: {meaning: "sand", icon: {day: "day-dust", night: "night-dust"}},
            761: {meaning: "dust", icon: {day: "day-dust", night: "night-dust"}},
            762: {meaning: "volcanic ash", icon: {day: "day-dust", night: "night-dust"}},
            771: {meaning: "squalls", icon: {day: "day-fog", night: "night-fog"}},
            781: {meaning: "tornado", icon: {day: "tornado", night: "tornado"}},
            //clouds
            800: {meaning: "clear sky", icon: {day: "day-sunny", night: "night-clear"}},
            801: {meaning: "few clouds", icon: {day: "day-cloudy", night: "night-alt-cloudy"}},
            802: {meaning: "scattered clouds", icon: {day: "day-cloudy", night: "night-alt-cloudy"}},
            803: {meaning: "broken clouds", icon: {day: "day-cloudy", night: "night-alt-cloudy"}},
            804: {meaning: "overcast clouds", icon: {day: "day-cloudy", night: "night-alt-cloudy"}},
            //extreme
            900: {meaning: "tornado", icon: {day: "tornado", night: "tornado"}},
            901: {meaning: "tropical storm", icon: {day: "hurricane", night: "hurricane"}},
            902: {meaning: "hurricane", icon: {day: "hurricane", night: "hurricane"}},
            903: {meaning: "cold", icon: {day: "snowflake-cold", night: "snowflake-cold"}},
            904: {meaning: "hot", icon: {day: "hot", night: "hot"}},
            905: {meaning: "windy", icon: {day: "strong-wind", night: "strong-wind"}},
            906: {meaning: "hail", icon: {day: "day-hail", night: "night-hail"}},
            //additional
            951: {meaning: "calm", icon: ""},
            952: {meaning: "light breeze", icon: ""},
            953: {meaning: "gentle breeze", icon: ""},
            954: {meaning: "moderate breeze", icon: ""},
            955: {meaning: "fresh breeze", icon: ""},
            956: {meaning: "strong breeze", icon: ""},
            957: {meaning: "high wind, near gale", icon: ""},
            958: {meaning: "gale", icon: ""},
            959: {meaning: "severe gale", icon: ""},
            960: {meaning: "storm", icon: ""},
            961: {meaning: "violent storm", icon: ""},
            962: {meaning: "hurricane", icon: ""},

        }

        if (day) {
            var time = "day"
        } else {
            var time = "night";
        }

        return "wi-" + dictionary[weather].icon[time];
    }

}