from my_app.models import Contact
from core.baseservice import BaseService

class myapp_service(BaseService):

    def get_data():
        try:
            dataset= Contact.objects.all()
            print(dataset)
            dictset= BaseService.get_200_response(data=dataset)
            return dictset; 

        except:
            dataset= Contact.object.all()
            dictset = BaseService.get_500_response(data=dataset)
            return dictset; 

    def delete_data(data):
        dataset= Contact.objects.all()
        dataset.filter(name=data).delete()



    

