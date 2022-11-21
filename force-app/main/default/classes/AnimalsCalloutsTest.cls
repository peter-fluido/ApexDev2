@IsTest
private class AnimalsCalloutsTest {
    @IsTest
    static void testGetCallout() {
        // Create a mock response based on a static resource
        StaticResourceCalloutMock mock = new StaticResourceCalloutMock();
        mock.setStaticResource('GetAnimalResource');
        mock.setStatusCode(200);
        mock.setHeader('Content-Type', 'application/json;charset=UTF-8');
        // Associate the callout with a mock response
        Test.setMock(HttpCalloutMock.class, mock);
        // Call method to test
        HttpResponse result = AnimalsCallouts.getAnimals();
        // Verification
        System.assertNotEquals(null, result, 'The callout returned a response');
        System.assertEquals(200, result.getStatusCode(), 'The status code is not 200');
        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(result.getBody());
        List<Object> animals = (List<Object>) results.get('animals');
        System.assertEquals(6, animals.size(), 'The array should only contain 3 items');
    }

    @IsTest
    static void testGetCalloutMock() {
        // Create a mock response based on a static resource
        AnimalsHttpsCalloutMock mock = new AnimalsHttpsCalloutMock();
        // Associate the callout with a mock response
        Test.setMock(HttpCalloutMock.class, mock);
        // Call method to test
        HttpResponse result = AnimalsCallouts.getAnimals();
        // Verification
        System.assertNotEquals(null, result, 'The callout returned a response');
        System.assertEquals(200, result.getStatusCode(), 'The status code is not 200');
        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(result.getBody());
        List<Object> animals = (List<Object>) results.get('animals');
        System.assertEquals(5, animals.size(), 'The array should only contain 5 items');
    }

    @IsTest
    static void testAddMightyMoose() {
        // Create a mock response based on a static resource
        AnimalsHttpsCalloutMock mock = new AnimalsHttpsCalloutMock();
        // Associate the callout with a mock response
        Test.setMock(HttpCalloutMock.class, mock);
        // Call method to test
        HttpResponse result = AnimalsCallouts.addMightyMoose();
        // Verification
        System.assertNotEquals(null, result, 'The callout returned a response');
        System.assertEquals(201, result.getStatusCode(), 'The status code is not 201');
        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(result.getBody());
        List<Object> animals = (List<Object>) results.get('animals');
        System.assertEquals(5, animals.size(), 'The array should only contain 5 items');
    }
}
