import csv

data = {
    "data": {
        "listings": [
            {
                "lookup": {
                    "listingCurrency": "EUR",
                    "listingShortName": "Inversabad 70 Base",
                    "listingStatus": "NOT_LISTED",
                    "marketShortName": "EPF EUR"
                },
                "lookupStatus": "FOUND",
                "requestedId": "ES0174434037_3230",
                "requestedScheme": "ISIN_BC",
                "marketData": {
                    "endOfDayHistory": [
                        {
                            "close": 8.8599,
                            "last": 8.8599,
                            "sessionDate": "2019-01-01"
                        },
                        {
                            "close": 8.8786,
                            "last": 8.8786,
                            "sessionDate": "2019-01-02"
                        },
                        {
                            "close": 10.1302,
                            "last": 10.1302,
                            "sessionDate": "2020-01-01"
                        },
                        {
                            "close": 10.1814,
                            "last": 10.1814,
                            "sessionDate": "2020-01-02"
                        },
                        {
                            "close": 10.0894,
                            "last": 10.0894,
                            "sessionDate": "2021-01-01"
                        },
                        {
                            "close": 10.089,
                            "last": 10.089,
                            "sessionDate": "2021-01-02"
                        },
                        {
                            "close": 11.6885,
                            "last": 11.6885,
                            "sessionDate": "2022-01-01"
                        },
                        {
                            "close": 11.688,
                            "last": 11.688,
                            "sessionDate": "2022-01-02"
                        },
                        {
                            "close": 10.1755,
                            "last": 10.1755,
                            "sessionDate": "2023-01-01"
                        },
                        {
                            "close": 10.2138,
                            "last": 10.2138,
                            "sessionDate": "2023-01-02"
                        },
                        {
                            "close": 10.902,
                            "last": 10.902,
                            "sessionDate": "2024-01-01"
                        },
                        {
                            "close": 10.9092,
                            "last": 10.9092,
                            "sessionDate": "2024-01-02"
                        }
                    ]
                }
            }
        ]
    }
 }
 
 

# Get the endOfDayHistory from the data
history_data = data['data']['listings'][0]['marketData']['endOfDayHistory']

# Prepare data for CSV
csv_data = [(item['sessionDate'], item['last']) for item in history_data]

# Create CSV file
with open('output.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["date", "last"])  # write header

    for row in csv_data:
        writer.writerow(row)