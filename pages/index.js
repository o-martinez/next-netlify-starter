import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Omars app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>
          <script>
          var requestBody = ""; 

var client=new XMLHttpRequest();
client.open("get","https://digitalworkflow.service-now.com/api/now/table/x_snc_driver_fee_0_driver_feedback?sysparm_limit=1");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'1AppEngine!'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
		document.getElementById("response").innerHTML=this.status + this.response; 
	}
}; 
client.send(requestBody);
          </script>
        </p>
      </main>

      <Footer />
    </div>
  )
}
