---
title: Montenegro
image: '/b123.png'
---

<div style="display: flex; justify-content: center;">

  <div>
    <center>
      <h2>How tight do you want the schedule to be planned?</h2>
      <select id="planning" style="width: 300px; height: 40px; font-size: 30px;">
        <option value="" selected disabled>Select planning:</option>
        <option value="tight">Tight</option>
        <option value="regular">Regular</option>
        <option value="relaxed">Relaxed</option>
      </select>
    </center>
  </div>

  <div>
  <center>
      <h2>How many days do you plan to stay?</h2>
      <select id="duration" style="width: 300px; height: 40px; font-size: 30px;">
        <option value="" selected disabled>Select duration:</option>
        <option value="2">2 days</option>
        <option value="4">4 days</option>
        <option value="5">5 days</option>
        <option value="7">7 days</option>
      </select>
    </center>
  </div>

</div>

<center>
<br><br><br>
<#text field>
<br><br><br>
</center>

<center>
  <a href="https://www.booking.com/hotel/me/berlin.en.html?aid=8042171&no_rooms=1&group_adults=2&room1=A%2CA" style="display:inline-block; background-color:#B0D4FF; color:black; padding:10px 20px; text-decoration:none; border-radius: 5px; border: 1px solid black;">Book our suggested hotel!</a>
</center>

<script>
  function redirectToURL() {
    const planning = document.getElementById('planning').value;
    const duration = document.getElementById('duration').value;

    if (planning && duration) {
      const url = `https://www.google.com/search?q=${planning}+${duration}`;
      window.location.href = url;
    }
  }

  document.getElementById('planning').addEventListener('change', redirectToURL);
  document.getElementById('duration').addEventListener('change', redirectToURL);
</script>
