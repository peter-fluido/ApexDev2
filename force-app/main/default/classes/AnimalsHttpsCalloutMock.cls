@IsTest
public class AnimalsHttpsCalloutMock implements HttpCalloutMock {
    public HttpResponse respond(HttpRequest request) {
        // Create fake response
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('{"animals":["majestic badger","fluffy bunny","scary bear","chicken","mighty moose"]}');
        response.setStatusCode(200);
        return response;
    }
}
