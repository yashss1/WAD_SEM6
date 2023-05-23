import webapp2
import urllib2
import json


class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write("<html><body>")
        self.response.write("<h1>Weather Forecast</h1>")
        self.response.write("<form action = '/result' method='post'>")
        self.response.write("Latitute : <input type = 'text' name='lat'>")
        self.response.write("<br>")
        self.response.write("Longitude : <input type = 'text' name='lon'>")
        self.response.write("<br><br>")
        self.response.write("<input type = 'submit' value='submit'>")
        self.response.write("</form></html></body>")

class resultPage(webapp2.RequestHandler):
    def post(self):
        lat = self.request.get('lat')
        lon = self.request.get('lon')

        url = "https://api.open-meteo.com/v1/forecast?latitude=" + str(lat) + "&longitude=" + str(lon)
        
        response = urllib2.urlopen(url).read()
        data = json.loads(response)

        self.response.write(data)

app = webapp2.WSGIApplication(
    [("/", MainPage), ("/result", resultPage)],
    debug = True
)
    