import{u as g,j as e}from"./index-DhU4h9GU.js";import{N as u,d as h,e as p,f as x}from"./Navbar-DqmeKDl6.js";import{u as b}from"./index.esm-D5jWM784.js";import{S as i}from"./sweetalert2.esm.all-BY1s0Tb6.js";import{b as f}from"./background-Ci9soomE.js";import{u as j}from"./iconBase-BA_MHhIe.js";import{m as o}from"./proxy-ChTT-aBP.js";const T=()=>{const{register:l,handleSubmit:n,formState:{errors:a}}=b(),{t:s}=j(),c=g(),d=async m=>{try{const r=await fetch("https://adeeb0011.pythonanywhere.com/api/accounts/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),t=await r.json();r.ok?(localStorage.setItem("token",t.token),localStorage.setItem("is_superuser",t.is_superuser),c("/dashboard"),console.log(t)):i.fire({icon:"error",title:"Login failed",text:t.error||"Invalid credentials. Please try again."})}catch(r){console.error("Error during login:",r),i.fire({icon:"error",title:"Something went wrong",text:"Please try again later."})}};return e.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-cover bg-center relative",style:{backgroundImage:`url(${f})`},children:[e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),e.jsx(u,{isِAnoutherPage:!0}),e.jsxs(o.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative z-10",children:[e.jsx("h2",{className:"text-2xl font-bold text-center mb-4",children:s("login.title")}),e.jsx("p",{className:"text-center text-gray-600 mb-6",children:s("login.description")}),e.jsxs("form",{onSubmit:n(d),children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("input",{type:"email",placeholder:s("login.emailPlaceholder"),...l("email",{required:s("login.emailPlaceholder"),pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:s("login.emailPlaceholder")}}),className:"w-full p-2 border rounded"}),a.email&&e.jsx("p",{className:"text-red-500 text-sm",children:a.email.message})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("input",{type:"password",placeholder:s("login.passwordPlaceholder"),...l("password",{required:s("login.passwordPlaceholder"),minLength:{value:6,message:s("login.passwordPlaceholder")}}),className:"w-full p-2 border rounded"}),a.password&&e.jsx("p",{className:"text-red-500 text-sm",children:a.password.message})]}),e.jsx("button",{type:"submit",className:"w-full bg-amber-800 text-white p-2 rounded hover:bg-amber-900 transition duration-300",children:s("login.submitButton")})]}),e.jsxs("p",{className:"text-center mt-4",children:[s("login.noAccount")," ",e.jsx("a",{href:"/signin",className:"text-amber-900 hover:underline",children:s("login.signUp")})]}),e.jsxs("div",{className:"flex items-center my-6",children:[e.jsx("div",{className:"flex-grow border-t border-gray-300"}),e.jsx("span",{className:"mx-4 text-gray-500",children:s("login.orLogIn")}),e.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),e.jsxs("div",{className:"flex justify-center space-x-4",children:[e.jsx(o.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300",children:e.jsx(h,{})}),e.jsx(o.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300",children:e.jsx(p,{})}),e.jsx(o.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300",children:e.jsx(x,{})})]})]})]})};export{T as default};
