
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  
  export default function Footer() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/79ee2f3e-4204-4781-bfe6-eb180f1020ba/text/Footer/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("FooterID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/79ee2f3e-4204-4781-bfe6-eb180f1020ba/text/Footer/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("FooterID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/79ee2f3e-4204-4781-bfe6-eb180f1020ba/text/Footer/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='FooterID'>
      </div>
    )
  }