define({
    //Type your controller code here 
    sample: function() {
        var sampleData = [];
        for (var i = 0; i < 100; i++) {
            var hello = {
                col1: "mytext",
                col2: "myimage.png",
                col3: "row one"
            };
            sampleData.push(hello);
        }
        this.view.Dg.addAll(sampleData);
    }
});