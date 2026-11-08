
// GET : https://jsonplaceholder.typicode.com/posts/1

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is an array", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an('array');
});

pm.test("Response array has items with required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.length).to.be.above(0);
    pm.expect(jsonData[0]).to.have.property('userId');
    pm.expect(jsonData[0]).to.have.property('id');
    pm.expect(jsonData[0]).to.have.property('title');
    pm.expect(jsonData[0]).to.have.property('body');
});

pm.test("Response is an object", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an('object');
});

pm.test("Response object has required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('userId');
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('title');
    pm.expect(jsonData).to.have.property('body');
});