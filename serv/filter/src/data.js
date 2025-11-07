const users = [
  {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Anni",
      "last": "Latvala"
    },
    "location": {
      "street": {
        "number": 7514,
        "name": "Mannerheimintie"
      },
      "city": "Lieto",
      "state": "Kainuu",
      "country": "Finland",
      "postcode": 25016,
      "coordinates": {
        "latitude": "-24.0786",
        "longitude": "129.3014"
      },
      "timezone": {
        "offset": "+3:00",
        "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
      }
    },
    "email": "anni.latvala@example.com",
    "dob": {
      "date": "1992-05-04T13:45:19.954Z",
      "age": 33
    },
    "registered": {
      "date": "2012-08-30T10:11:39.730Z",
      "age": 13
    },
    "phone": "02-831-641",
    "cell": "045-674-85-28",
    "id": {
      "name": "HETU",
      "value": "NaNNA704undefined"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/86.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
    },
    "nat": "FI"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Gabriel",
      "last": "Moreno"
    },
    "location": {
      "street": {
        "number": 9035,
        "name": "Calle Covadonga"
      },
      "city": "Orense",
      "state": "La Rioja",
      "country": "Spain",
      "postcode": 39693,
      "coordinates": {
        "latitude": "16.3066",
        "longitude": "42.7719"
      },
      "timezone": {
        "offset": "-4:00",
        "description": "Atlantic Time (Canada), Caracas, La Paz"
      }
    },
    "email": "gabriel.moreno@example.com",
    "dob": {
      "date": "1984-04-21T03:10:25.292Z",
      "age": 41
    },
    "registered": {
      "date": "2007-08-10T23:15:46.943Z",
      "age": 18
    },
    "phone": "909-348-279",
    "cell": "641-756-714",
    "id": {
      "name": "DNI",
      "value": "75476990-V"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/33.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
    },
    "nat": "ES"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Alice",
      "last": "Chen"
    },
    "location": {
      "street": {
        "number": 2922,
        "name": "Customs Street"
      },
      "city": "Rotorua",
      "state": "Bay of Plenty",
      "country": "New Zealand",
      "postcode": 50718,
      "coordinates": {
        "latitude": "35.7592",
        "longitude": "-83.8166"
      },
      "timezone": {
        "offset": "0:00",
        "description": "Western Europe Time, London, Lisbon, Casablanca"
      }
    },
    "email": "alice.chen@example.com",
    "dob": {
      "date": "1996-06-24T07:07:43.862Z",
      "age": 29
    },
    "registered": {
      "date": "2010-07-25T02:06:01.296Z",
      "age": 15
    },
    "phone": "(922)-153-7279",
    "cell": "(005)-917-7547",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/39.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
    },
    "nat": "NZ"
  },
  {
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Marie",
      "last": "Meyer"
    },
    "location": {
      "street": {
        "number": 1940,
        "name": "Timber Wolf Trail"
      },
      "city": "El Cajon",
      "state": "North Dakota",
      "country": "United States",
      "postcode": 60014,
      "coordinates": {
        "latitude": "-6.3681",
        "longitude": "-74.8034"
      },
      "timezone": {
        "offset": "-4:00",
        "description": "Atlantic Time (Canada), Caracas, La Paz"
      }
    },
    "email": "marie.meyer@example.com",
    "dob": {
      "date": "1970-02-25T15:25:23.982Z",
      "age": 55
    },
    "registered": {
      "date": "2007-11-01T08:57:05.959Z",
      "age": 17
    },
    "phone": "(220) 216-9928",
    "cell": "(601) 525-1033",
    "id": {
      "name": "SSN",
      "value": "494-73-0367"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/82.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
    },
    "nat": "US"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Joabe",
      "last": "da Costa"
    },
    "location": {
      "street": {
        "number": 4435,
        "name": "Rua Boa Vista "
      },
      "city": "Ilhéus",
      "state": "Maranhão",
      "country": "Brazil",
      "postcode": 86961,
      "coordinates": {
        "latitude": "7.1245",
        "longitude": "171.2376"
      },
      "timezone": {
        "offset": "+3:00",
        "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
      }
    },
    "email": "joabe.dacosta@example.com",
    "dob": {
      "date": "1944-11-25T05:48:48.716Z",
      "age": 80
    },
    "registered": {
      "date": "2015-09-25T22:55:45.435Z",
      "age": 10
    },
    "phone": "(63) 6833-0958",
    "cell": "(63) 0412-4858",
    "id": {
      "name": "CPF",
      "value": "694.302.885-28"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/52.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
    },
    "nat": "BR"
  },
  {
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Lilou",
      "last": "Pierre"
    },
    "location": {
      "street": {
        "number": 849,
        "name": "Rue Victor-Hugo"
      },
      "city": "Dunkerque",
      "state": "Aube",
      "country": "France",
      "postcode": 33476,
      "coordinates": {
        "latitude": "63.8654",
        "longitude": "-178.7365"
      },
      "timezone": {
        "offset": "+11:00",
        "description": "Magadan, Solomon Islands, New Caledonia"
      }
    },
    "email": "lilou.pierre@example.com",
    "dob": {
      "date": "1979-07-24T09:30:49.801Z",
      "age": 46
    },
    "registered": {
      "date": "2010-11-01T18:57:17.109Z",
      "age": 14
    },
    "phone": "01-16-44-18-21",
    "cell": "06-96-99-52-79",
    "id": {
      "name": "INSEE",
      "value": "2790687593356 74"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/56.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/56.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/56.jpg"
    },
    "nat": "FR"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Davut",
      "last": "Çapanoğlu"
    },
    "location": {
      "street": {
        "number": 7126,
        "name": "Vatan Cd"
      },
      "city": "Trabzon",
      "state": "Giresun",
      "country": "Turkey",
      "postcode": 14143,
      "coordinates": {
        "latitude": "48.1763",
        "longitude": "-39.7839"
      },
      "timezone": {
        "offset": "-6:00",
        "description": "Central Time (US & Canada), Mexico City"
      }
    },
    "email": "davut.capanoglu@example.com",
    "dob": {
      "date": "1988-11-10T07:24:32.990Z",
      "age": 36
    },
    "registered": {
      "date": "2004-02-13T18:54:41.513Z",
      "age": 21
    },
    "phone": "(556)-125-9304",
    "cell": "(266)-259-7510",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/14.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
    },
    "nat": "TR"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Thomas",
      "last": "Lecomte"
    },
    "location": {
      "street": {
        "number": 4768,
        "name": "Rue Cyrus-Hugues"
      },
      "city": "Rueil-Malmaison",
      "state": "Haute-Corse",
      "country": "France",
      "postcode": 38970,
      "coordinates": {
        "latitude": "30.2860",
        "longitude": "113.4988"
      },
      "timezone": {
        "offset": "-7:00",
        "description": "Mountain Time (US & Canada)"
      }
    },
    "email": "thomas.lecomte@example.com",
    "dob": {
      "date": "1960-12-23T03:39:15.858Z",
      "age": 64
    },
    "registered": {
      "date": "2015-08-31T08:56:17.168Z",
      "age": 10
    },
    "phone": "05-13-41-03-44",
    "cell": "06-94-32-30-23",
    "id": {
      "name": "INSEE",
      "value": "1601100289691 47"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/28.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
    },
    "nat": "FR"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Alexis",
      "last": "Taylor"
    },
    "location": {
      "street": {
        "number": 6256,
        "name": "Carrington Road"
      },
      "city": "Hastings",
      "state": "Canterbury",
      "country": "New Zealand",
      "postcode": 53141,
      "coordinates": {
        "latitude": "68.3274",
        "longitude": "176.2259"
      },
      "timezone": {
        "offset": "-10:00",
        "description": "Hawaii"
      }
    },
    "email": "alexis.taylor@example.com",
    "dob": {
      "date": "1961-04-09T07:38:27.005Z",
      "age": 64
    },
    "registered": {
      "date": "2016-02-21T05:53:49.454Z",
      "age": 9
    },
    "phone": "(819)-562-8251",
    "cell": "(704)-386-0987",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/36.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
    },
    "nat": "NZ"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Kyran",
      "last": "Kamstra"
    },
    "location": {
      "street": {
        "number": 6772,
        "name": "Brabantstraat"
      },
      "city": "Klooster Lidlum",
      "state": "Zuid-Holland",
      "country": "Netherlands",
      "postcode": "9207 BU",
      "coordinates": {
        "latitude": "88.4359",
        "longitude": "149.4246"
      },
      "timezone": {
        "offset": "-10:00",
        "description": "Hawaii"
      }
    },
    "email": "kyran.kamstra@example.com",
    "dob": {
      "date": "1987-05-15T03:15:37.930Z",
      "age": 38
    },
    "registered": {
      "date": "2021-08-21T08:56:08.934Z",
      "age": 4
    },
    "phone": "(011) 0504843",
    "cell": "(06) 25331670",
    "id": {
      "name": "BSN",
      "value": "45694014"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/84.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
    },
    "nat": "NL"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Wiebren",
      "last": "Van Unen"
    },
    "location": {
      "street": {
        "number": 7752,
        "name": "Jaap Bergmanstraat"
      },
      "city": "Amsweer",
      "state": "Zuid-Holland",
      "country": "Netherlands",
      "postcode": "0653 PM",
      "coordinates": {
        "latitude": "-27.5139",
        "longitude": "103.8279"
      },
      "timezone": {
        "offset": "-4:00",
        "description": "Atlantic Time (Canada), Caracas, La Paz"
      }
    },
    "email": "wiebren.vanunen@example.com",
    "dob": {
      "date": "1946-10-27T10:01:09.671Z",
      "age": 78
    },
    "registered": {
      "date": "2021-04-09T19:49:23.275Z",
      "age": 4
    },
    "phone": "(006) 7241603",
    "cell": "(06) 42185026",
    "id": {
      "name": "BSN",
      "value": "17315507"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/92.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
    },
    "nat": "NL"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Wijnand",
      "last": "Hemmink"
    },
    "location": {
      "street": {
        "number": 1830,
        "name": "De Niers"
      },
      "city": "Overberg",
      "state": "Gelderland",
      "country": "Netherlands",
      "postcode": "2903 BG",
      "coordinates": {
        "latitude": "54.9049",
        "longitude": "-45.1396"
      },
      "timezone": {
        "offset": "+7:00",
        "description": "Bangkok, Hanoi, Jakarta"
      }
    },
    "email": "wijnand.hemmink@example.com",
    "dob": {
      "date": "1982-11-11T10:10:51.944Z",
      "age": 42
    },
    "registered": {
      "date": "2018-07-29T05:30:39.944Z",
      "age": 7
    },
    "phone": "(089) 1084352",
    "cell": "(06) 44388704",
    "id": {
      "name": "BSN",
      "value": "72846210"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/9.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
    },
    "nat": "NL"
  },
  {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Gorpina",
      "last": "Telizhenko"
    },
    "location": {
      "street": {
        "number": 1904,
        "name": "Starosinna ploshcha"
      },
      "city": "Gorodishche",
      "state": "Kiyivska",
      "country": "Ukraine",
      "postcode": 62040,
      "coordinates": {
        "latitude": "-38.3940",
        "longitude": "-64.2295"
      },
      "timezone": {
        "offset": "0:00",
        "description": "Western Europe Time, London, Lisbon, Casablanca"
      }
    },
    "email": "gorpina.telizhenko@example.com",
    "dob": {
      "date": "1990-04-04T15:02:24.518Z",
      "age": 35
    },
    "registered": {
      "date": "2022-03-05T13:45:19.663Z",
      "age": 3
    },
    "phone": "(096) G37-0229",
    "cell": "(099) P83-5933",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/69.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
    },
    "nat": "UA"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Hans Jörg",
      "last": "Rusch"
    },
    "location": {
      "street": {
        "number": 3108,
        "name": "Grüner Weg"
      },
      "city": "Wildenfels",
      "state": "Schleswig-Holstein",
      "country": "Germany",
      "postcode": 50305,
      "coordinates": {
        "latitude": "-37.2893",
        "longitude": "68.4301"
      },
      "timezone": {
        "offset": "-2:00",
        "description": "Mid-Atlantic"
      }
    },
    "email": "hansjorg.rusch@example.com",
    "dob": {
      "date": "1968-05-08T21:49:19.718Z",
      "age": 57
    },
    "registered": {
      "date": "2003-01-06T07:06:44.258Z",
      "age": 22
    },
    "phone": "0768-2009579",
    "cell": "0171-2245220",
    "id": {
      "name": "SVNR",
      "value": "81 080568 R 160"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/8.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
    },
    "nat": "DE"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Jorge",
      "last": "Warren"
    },
    "location": {
      "street": {
        "number": 2311,
        "name": "Green Lane"
      },
      "city": "Cork",
      "state": "Clare",
      "country": "Ireland",
      "postcode": 61593,
      "coordinates": {
        "latitude": "-82.5400",
        "longitude": "-111.5469"
      },
      "timezone": {
        "offset": "0:00",
        "description": "Western Europe Time, London, Lisbon, Casablanca"
      }
    },
    "email": "jorge.warren@example.com",
    "dob": {
      "date": "1991-08-14T12:46:17.334Z",
      "age": 34
    },
    "registered": {
      "date": "2009-04-14T04:01:36.430Z",
      "age": 16
    },
    "phone": "041-926-6094",
    "cell": "081-788-3543",
    "id": {
      "name": "PPS",
      "value": "1680547T"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/23.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
    },
    "nat": "IE"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Ondino",
      "last": "Rocha"
    },
    "location": {
      "street": {
        "number": 3597,
        "name": "Rua Um"
      },
      "city": "Itapecerica da Serra",
      "state": "Ceará",
      "country": "Brazil",
      "postcode": 73145,
      "coordinates": {
        "latitude": "-33.6706",
        "longitude": "-77.9013"
      },
      "timezone": {
        "offset": "+6:00",
        "description": "Almaty, Dhaka, Colombo"
      }
    },
    "email": "ondino.rocha@example.com",
    "dob": {
      "date": "1978-12-29T17:22:49.432Z",
      "age": 46
    },
    "registered": {
      "date": "2007-09-16T08:39:36.799Z",
      "age": 18
    },
    "phone": "(76) 7058-8466",
    "cell": "(95) 6200-2428",
    "id": {
      "name": "CPF",
      "value": "522.398.299-31"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/73.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
    },
    "nat": "BR"
  },
  {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Sumana",
      "last": "Chavare"
    },
    "location": {
      "street": {
        "number": 7789,
        "name": "Rajpath"
      },
      "city": "Raebareli",
      "state": "Bihar",
      "country": "India",
      "postcode": 38676,
      "coordinates": {
        "latitude": "-37.1524",
        "longitude": "131.2666"
      },
      "timezone": {
        "offset": "-1:00",
        "description": "Azores, Cape Verde Islands"
      }
    },
    "email": "sumana.chavare@example.com",
    "dob": {
      "date": "1994-10-29T13:34:47.331Z",
      "age": 30
    },
    "registered": {
      "date": "2012-11-18T11:41:30.706Z",
      "age": 12
    },
    "phone": "7293806122",
    "cell": "8507797756",
    "id": {
      "name": "UIDAI",
      "value": "002858019308"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/43.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
    },
    "nat": "IN"
  },
  {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Florence",
      "last": "Harvey"
    },
    "location": {
      "street": {
        "number": 7260,
        "name": "Denny Street"
      },
      "city": "Greystones",
      "state": "Galway City",
      "country": "Ireland",
      "postcode": 76479,
      "coordinates": {
        "latitude": "-2.7932",
        "longitude": "-15.9404"
      },
      "timezone": {
        "offset": "-8:00",
        "description": "Pacific Time (US & Canada)"
      }
    },
    "email": "florence.harvey@example.com",
    "dob": {
      "date": "1994-11-07T04:00:54.887Z",
      "age": 30
    },
    "registered": {
      "date": "2004-08-05T12:39:05.834Z",
      "age": 21
    },
    "phone": "071-026-9765",
    "cell": "081-602-4162",
    "id": {
      "name": "PPS",
      "value": "8540832T"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/15.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/15.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/15.jpg"
    },
    "nat": "IE"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Rineke",
      "last": "Bassa"
    },
    "location": {
      "street": {
        "number": 2106,
        "name": "Komarowlaan"
      },
      "city": "Schiermonnikoog",
      "state": "Flevoland",
      "country": "Netherlands",
      "postcode": "2477 GR",
      "coordinates": {
        "latitude": "74.8794",
        "longitude": "-17.8333"
      },
      "timezone": {
        "offset": "+6:00",
        "description": "Almaty, Dhaka, Colombo"
      }
    },
    "email": "rineke.bassa@example.com",
    "dob": {
      "date": "1961-03-27T09:16:10.145Z",
      "age": 64
    },
    "registered": {
      "date": "2005-10-19T05:29:04.402Z",
      "age": 19
    },
    "phone": "(060) 4315384",
    "cell": "(06) 06960262",
    "id": {
      "name": "BSN",
      "value": "02015499"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/80.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
    },
    "nat": "NL"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Clara",
      "last": "Jensen"
    },
    "location": {
      "street": {
        "number": 5104,
        "name": "Hulvejen"
      },
      "city": "Horsens",
      "state": "Hovedstaden",
      "country": "Denmark",
      "postcode": 19366,
      "coordinates": {
        "latitude": "-9.9589",
        "longitude": "-4.4439"
      },
      "timezone": {
        "offset": "-3:30",
        "description": "Newfoundland"
      }
    },
    "email": "clara.jensen@example.com",
    "dob": {
      "date": "1958-04-07T12:01:45.855Z",
      "age": 67
    },
    "registered": {
      "date": "2020-11-10T17:16:05.919Z",
      "age": 4
    },
    "phone": "74938419",
    "cell": "80324150",
    "id": {
      "name": "CPR",
      "value": "070458-8492"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/47.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
    },
    "nat": "DK"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Elliot",
      "last": "Li"
    },
    "location": {
      "street": {
        "number": 1566,
        "name": "36th Ave"
      },
      "city": "Springfield",
      "state": "Saskatchewan",
      "country": "Canada",
      "postcode": "E4K 4Y9",
      "coordinates": {
        "latitude": "14.0810",
        "longitude": "34.1005"
      },
      "timezone": {
        "offset": "-2:00",
        "description": "Mid-Atlantic"
      }
    },
    "email": "elliot.li@example.com",
    "dob": {
      "date": "1974-10-26T16:12:27.806Z",
      "age": 50
    },
    "registered": {
      "date": "2019-05-28T20:08:25.089Z",
      "age": 6
    },
    "phone": "Q55 A22-2065",
    "cell": "X58 H81-4336",
    "id": {
      "name": "SIN",
      "value": "462486572"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/79.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
    },
    "nat": "CA"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Michael",
      "last": "Weaver"
    },
    "location": {
      "street": {
        "number": 4503,
        "name": "Edwards Rd"
      },
      "city": "Elk Grove",
      "state": "Washington",
      "country": "United States",
      "postcode": 98482,
      "coordinates": {
        "latitude": "-17.0844",
        "longitude": "-48.8621"
      },
      "timezone": {
        "offset": "+5:00",
        "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
      }
    },
    "email": "michael.weaver@example.com",
    "dob": {
      "date": "1950-05-31T10:09:03.410Z",
      "age": 75
    },
    "registered": {
      "date": "2017-06-03T11:40:51.489Z",
      "age": 8
    },
    "phone": "(996) 687-4416",
    "cell": "(893) 563-6404",
    "id": {
      "name": "SSN",
      "value": "840-75-1580"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/74.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
    },
    "nat": "US"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Ikram",
      "last": "Van Genderen"
    },
    "location": {
      "street": {
        "number": 730,
        "name": "Alddiel"
      },
      "city": "Erp",
      "state": "Utrecht",
      "country": "Netherlands",
      "postcode": "9081 GB",
      "coordinates": {
        "latitude": "84.1991",
        "longitude": "-143.5572"
      },
      "timezone": {
        "offset": "-3:00",
        "description": "Brazil, Buenos Aires, Georgetown"
      }
    },
    "email": "ikram.vangenderen@example.com",
    "dob": {
      "date": "2000-12-04T10:09:53.323Z",
      "age": 24
    },
    "registered": {
      "date": "2013-07-22T23:17:34.446Z",
      "age": 12
    },
    "phone": "(042) 3937182",
    "cell": "(06) 17002959",
    "id": {
      "name": "BSN",
      "value": "12629410"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/61.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
    },
    "nat": "NL"
  },
  {
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Megan",
      "last": "Bergeron"
    },
    "location": {
      "street": {
        "number": 994,
        "name": "Queen St"
      },
      "city": "Lumsden",
      "state": "Manitoba",
      "country": "Canada",
      "postcode": "Q7A 7B0",
      "coordinates": {
        "latitude": "-34.9957",
        "longitude": "117.9098"
      },
      "timezone": {
        "offset": "0:00",
        "description": "Western Europe Time, London, Lisbon, Casablanca"
      }
    },
    "email": "megan.bergeron@example.com",
    "dob": {
      "date": "1987-09-19T22:22:51.513Z",
      "age": 38
    },
    "registered": {
      "date": "2008-10-27T08:42:34.112Z",
      "age": 16
    },
    "phone": "C43 V60-7435",
    "cell": "G57 F72-4068",
    "id": {
      "name": "SIN",
      "value": "316988435"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/3.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
    },
    "nat": "CA"
  },
  {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Sonia",
      "last": "Perry"
    },
    "location": {
      "street": {
        "number": 2324,
        "name": "W Dallas St"
      },
      "city": "Helena",
      "state": "North Dakota",
      "country": "United States",
      "postcode": 92295,
      "coordinates": {
        "latitude": "-15.3771",
        "longitude": "-107.7360"
      },
      "timezone": {
        "offset": "+5:45",
        "description": "Kathmandu"
      }
    },
    "email": "sonia.perry@example.com",
    "dob": {
      "date": "1970-11-10T03:06:19.005Z",
      "age": 54
    },
    "registered": {
      "date": "2014-12-29T22:16:10.961Z",
      "age": 10
    },
    "phone": "(200) 786-7155",
    "cell": "(345) 974-5795",
    "id": {
      "name": "SSN",
      "value": "117-20-9667"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/1.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
    },
    "nat": "US"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Ernst-Jan",
      "last": "Van Erk"
    },
    "location": {
      "street": {
        "number": 7462,
        "name": "Koraalstraat"
      },
      "city": "Dussen",
      "state": "Noord-Holland",
      "country": "Netherlands",
      "postcode": "5705 XW",
      "coordinates": {
        "latitude": "-85.8501",
        "longitude": "-86.2248"
      },
      "timezone": {
        "offset": "-11:00",
        "description": "Midway Island, Samoa"
      }
    },
    "email": "ernst-jan.vanerk@example.com",
    "dob": {
      "date": "1978-02-24T17:14:48.499Z",
      "age": 47
    },
    "registered": {
      "date": "2003-11-13T03:20:39.290Z",
      "age": 21
    },
    "phone": "(083) 1268444",
    "cell": "(06) 75247537",
    "id": {
      "name": "BSN",
      "value": "90892903"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/54.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
    },
    "nat": "NL"
  },
  {
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Asta",
      "last": "Madsen"
    },
    "location": {
      "street": {
        "number": 3474,
        "name": "Nørregårdsvej"
      },
      "city": "Samsø",
      "state": "Midtjylland",
      "country": "Denmark",
      "postcode": 87816,
      "coordinates": {
        "latitude": "11.9882",
        "longitude": "-3.4511"
      },
      "timezone": {
        "offset": "+4:00",
        "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
      }
    },
    "email": "asta.madsen@example.com",
    "dob": {
      "date": "1966-07-22T02:12:02.539Z",
      "age": 59
    },
    "registered": {
      "date": "2005-02-05T05:36:01.402Z",
      "age": 20
    },
    "phone": "44289149",
    "cell": "33654788",
    "id": {
      "name": "CPR",
      "value": "210766-4843"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/20.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
    },
    "nat": "DK"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Daniel",
      "last": "Taylor"
    },
    "location": {
      "street": {
        "number": 5683,
        "name": "Coastal Highway"
      },
      "city": "Chatham",
      "state": "Nunavut",
      "country": "Canada",
      "postcode": "A3I 5T4",
      "coordinates": {
        "latitude": "8.5962",
        "longitude": "138.0928"
      },
      "timezone": {
        "offset": "+4:30",
        "description": "Kabul"
      }
    },
    "email": "daniel.taylor@example.com",
    "dob": {
      "date": "1999-06-16T13:05:20.432Z",
      "age": 26
    },
    "registered": {
      "date": "2006-02-26T20:32:36.726Z",
      "age": 19
    },
    "phone": "B83 B08-9084",
    "cell": "C05 K35-0711",
    "id": {
      "name": "SIN",
      "value": "045590775"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/91.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
    },
    "nat": "CA"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Leslie",
      "last": "Hawkins"
    },
    "location": {
      "street": {
        "number": 2916,
        "name": "W Dallas St"
      },
      "city": "Brisbane",
      "state": "Queensland",
      "country": "Australia",
      "postcode": 2038,
      "coordinates": {
        "latitude": "-61.8688",
        "longitude": "133.9691"
      },
      "timezone": {
        "offset": "+1:00",
        "description": "Brussels, Copenhagen, Madrid, Paris"
      }
    },
    "email": "leslie.hawkins@example.com",
    "dob": {
      "date": "1972-10-20T04:56:29.476Z",
      "age": 52
    },
    "registered": {
      "date": "2003-08-11T17:10:36.532Z",
      "age": 22
    },
    "phone": "01-5225-9536",
    "cell": "0481-157-086",
    "id": {
      "name": "TFN",
      "value": "989074521"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/80.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
    },
    "nat": "AU"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Auguste",
      "last": "Moreau"
    },
    "location": {
      "street": {
        "number": 9612,
        "name": "Rue du 8 Mai 1945"
      },
      "city": "Brest",
      "state": "Meurthe-et-Moselle",
      "country": "France",
      "postcode": 82916,
      "coordinates": {
        "latitude": "-35.0265",
        "longitude": "156.6137"
      },
      "timezone": {
        "offset": "-10:00",
        "description": "Hawaii"
      }
    },
    "email": "auguste.moreau@example.com",
    "dob": {
      "date": "1997-06-14T06:32:31.588Z",
      "age": 28
    },
    "registered": {
      "date": "2021-03-17T09:01:11.854Z",
      "age": 4
    },
    "phone": "02-62-23-09-28",
    "cell": "06-30-41-53-74",
    "id": {
      "name": "INSEE",
      "value": "1970578098157 65"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/12.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/12.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg"
    },
    "nat": "FR"
  }
]
;

export default users;
