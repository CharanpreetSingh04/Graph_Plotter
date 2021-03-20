const getD5min=document.getElementById('5_min');
const getD15min=document.getElementById('15_min');
const live=document.getElementById('Live');
function getDat(){
    axios.get('https://random-data-api.com/api/users/random_user').then(response=>{
        initGraph(response.data.id);
    });
}
getD5min.addEventListener('click',getDat());
getD15min.addEventListener('click',getDat());
live.addEventListener('click',getDat());
