import webapp2
class MainPage(webapp2.RequestHandler):
	def get(self):
		for i in range(1,11):
			self.response.out.write("5")
			self.response.out.write("*")
			self.response.out.write(i);
			self.response.out.write("=")
			self.response.out.write(5*i)
			self.response.out.write("</br>")
			i+= 1
app=webapp2.WSGIApplication([('/',MainPage)],debug=True) 
