import webapp2 

import urllib2 
import json 

class mainpage(webapp2.RequestHandler):
    def get(self):
        self.response.write("<html><body>")
        self.response.write("<h1> Enter University Name</h1>") 
        self.response.write('<form action="/result" method="post">') 
        self.response.write('Enter Name of University <input type="text" name="univer" ><br><br>') 
        self.response.write('<input type="submit" value= "submit">') 
        self.response.write("</form> </body></html>")  



class resultpage(webapp2.RequestHandler):
    def post(self):
        uni = self.request.get('univer')
        x = uni
        uni = list(uni) 
        
        for i in range(len(uni)):
            if (ord(uni[i])!=32):
                continue
            else:
                uni[i] = '%20' 
            

        ans = str() 
        for i in uni:
            ans+=i 
        # self.response.write(ans)


        url = 'http://universities.hipolabs.com/search?name=' + ans 

    
        response1 = urllib2.urlopen(url).read() 
        data = json.loads(response1) 
        # self.response.write(data) 
        for i in data:
            self.response.write("Name : " + str(x) +"<br>") 
            self.response.write(" Country : " + str(i['country']) + "<br>") 
            # self.response.write(" Domains : " + str(*i['domains']) + "<br>") 



app = webapp2.WSGIApplication(
    [("/",mainpage),('/result',resultpage)],
    debug = True
)