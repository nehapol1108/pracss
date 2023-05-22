import webapp2
class MainPage(webapp2.RequestHandler):
	def get(self):
		i=0
		while i<10:
			self.response.out.write('neha pol</br>')
			self.response.out.write('33353</br>')
			self.response.out.write('IT</br>')
			i+= 1
app=webapp2.WSGIApplication([('/',MainPage)],debug=True) 
