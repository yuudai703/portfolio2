
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json()); // JSON形式のボディを解析
app.use(express.urlencoded({ extended: true })); // URLエンコードされたボディを解析
const mysql = require('mysql');

// MySQLに接続するための設定
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio'
});


// MySQLに接続
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});


// ルートパスへのリクエストに対するレスポンス
// Viteのビルドディレクトリを静的ファイルとして提供する
app.use(express.static(path.join(__dirname, 'my-portfolio/dist')));

// ルートパス以外のエンドポイントにViteがビルドしたファイルを提供する
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-portfolio/dist/index.html'));
});

//ブログクリック時
app.get('/blog/show/:blogId', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-portfolio/dist/index.html'));
});




//ブログ内容ゲットajax
app.get('/blog/get/:blogId', (req, res) => {

  console.log('get');
  const blogId = req.params.blogId;
  const query = 'select* from Blogs where ID = ?'
  connection.query(query,[blogId],(error,results)=>{
    if (error) {
      console.log(error);
      // エラーが発生した場合、クライアントにエラーレスポンスを送信し、処理を終了する
      return res.status(500).json({ error: "Internal Server Error" });
    }
    // 成功した場合、挿入したデータのIDとその他の情報をレスポンスとして返す
    console.log(results);
    res.json(results);
  });
});




app.post('/contacts/store', (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const message = req.body.message;

  const query = 'INSERT INTO contacts (name,address,message) VALUES (?, ?,?)';

  connection.query(query, [name, address, message], (error, results) => {
    if (error) {
      console.error(error);
      // エラーが発生した場合、クライアントにエラーレスポンスを送信し、処理を終了する
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // 成功した場合、挿入したデータのIDとその他の情報をレスポンスとして返す
    res.json({ id: results.insertId, name, address, message });
    // この時点でレスポンスが送信されたため、以降のレスポンスを送信しようとする操作は行わない
  });
});


app.get('/blog', (req, res) => {
  const query = 'SELECT * FROM Blogs ORDER BY ID DESC';
  connection.query(query, [], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});



//ブログ入力画面
app.get('/blog/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-portfolio/dist/index.html'));
});

app.post('/blog/create/store', (req, res) => {
  const title = req.body.title;
  const blogContents = req.body.blogContents;
  const query = 'INSERT INTO blogs (title,contents) VALUES (?,?)';
  connection.query(query, [title,blogContents], (error, results) => {
    if (error) {
      console.error(error);
      // エラーが発生した場合、クライアントにエラーレスポンスを送信し、処理を終了する
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // 成功した場合、挿入したデータのIDとその他の情報をレスポンスとして返す
    res.json({ id: results.insertId, title, contents });
    // この時点でレスポンスが送信されたため、以降のレスポンスを送信しようとする操作は行わない
  });
});


// アプリケーションを指定のポートでリッスン
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});