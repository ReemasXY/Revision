//cookie basically used in authentication in server side so adding cookie in the page should be enough
// documnet.cookie = "key=value" syntax to write cookie
//document.cookie to read all the cookies in the page
// once a cookie is set it cannot be deleted normally (expires required)
// also cookie never gets deleted( browser banda gareni , page reload gareni cookie haraudaina)

// ARound 20 cookie can be added maximum
//key=value pair chai 4KB exceed hunu hudaina
//each request tyo server ma pathauda cookie sangai janxa



document.cookie="name=Sameer"; // document.cookie = "name: Sameer " yesto garda ali arkai auxa so follow syntax
document.cookie="class=12";
console.log(document.cookie);


document.cookie="class=13"// override handinxa
console.log(document.cookie);


document.cookie= "rollno=12; subject=js";// multiple cookie cannot be set rollno matra auxa to semicolon paxi ko options jastai treat garxa like path; expires
console.log(document.cookie);


document.cookie =`${encodeURIComponent("@#$%$$#")}=${encodeURIComponent("243sdfasd@#$")}`;// yo function le chai aba special characters pani rakhna dinxa cokkie ma natra error auxa 

// encodeURIlai access garna decodeURIComponent ni xa
