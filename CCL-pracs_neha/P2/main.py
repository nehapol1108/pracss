import webapp2
class MainPage(webapp2.RequestHandler):
    def get(self):
        for i in range(5):
            self.response.out.write("Neha Pol <br>")
            self.response.out.write("33354 <br>")
            self.response.out.write("IT <br>")
app = webapp2.WSGIApplication([('/',MainPage)],debug=True)