import os
import webapp2
import json
import urllib
from google.appengine.ext.webapp import template
class MainPage(webapp2.RequestHandler):
    def get(self):
        temp={}
        path = os.path.join(os.path.dirname(__file__,'template/index.html'))
        self.response.out.write(template.render(path,temp))
    def post(self):
        pincode = self.request.get('pincode')
        url="https://api.postalpincode.in/pincode/"+ pincode
        data = urllib.urlopen(url).read()
        data = json.loads(data)
        status = data[0]['Status']
        if status == 'Success':
            name = data[0]["PostOffice"][0]["Name"]
            region = data[0]["PostOffice"][0]["Region"]
            temp={"name":name,"region":region}
            path = os.path.join(os.path.dirname(__file__),'template/results.html')
        if status == "Error":
            temp = {"data":data}
            path = os.path.join(os.path.dirname(__file__),'template/error.html')
        self.response.out.write(template.render(path,temp))
app = webapp2.WSGIApplication([('/',MainPage)],deubg=True)

