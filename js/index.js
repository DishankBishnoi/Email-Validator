let result = {
  tag: "",
  free: true,
  role: false,
  user: "dishankvishn22",
  email: "dishankvishn22@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async(e) => {
  e.preventDefault()       
  console.log("clicked")
  let key = "ema_live_icFIfxUR0lPy0BIVqLvCAOq8o5CuxNcqgEhjTpon"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let response = await res.json()
  let str = ``;
  for (key of Object.keys(result)) {
    str = str + `<div>${key}: ${result[key]}</div>`;
  }

  console.log(str);
  resultCont.innerHTML = str;
});
