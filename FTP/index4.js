app.use(express.json());
app.use(express.urlencoded());

app.post('/respuesta', function (req, res) {
    console.log("Información enviada");
 });
 