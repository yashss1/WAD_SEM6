import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write("Hello World")

        # for i in range(5):
            # self.response.write("Name : Yash <br>")
            # self.response.write("Seat Number : T1900058727 <br>")
            # self.response.write("Department : Information Technology <br>")
            
        # i = 0
        # while(i < 10):
        #     self.response.write("Name : Yash <br>")
        #     self.response.write("Seat Number : T1900058727 <br>")
        #     self.response.write("Department : Information Technology <br>")
        #     i+=1


        # for i in range(10):
        #     self.response.write("5 X ")
        #     self.response.write(i + 1)
        #     self.response.write(" = ")
        #     self.response.write(5 * (i + 1))
        #     self.response.write("<br>")

        # prev1 = 0
        # prev2 = 1
        # i = 0
        # self.response.write(prev1)
        # self.response.write("<br>")
        # self.response.write(prev2)
        # self.response.write("<br>")
        # while(i < 15):
        #     self.response.write(prev1 + prev2)
        #     self.response.write("<br>")
        #     t = prev1 + prev2
        #     prev1 = prev2
        #     prev2 = t
        #     i += 1




app = webapp2.WSGIApplication(
    [("/",MainPage)], debug = True
)

# python3 google-cloud-sdk/bin/dev_appserver.py {path (copy of app.yaml without it)}