const form = document.querySelector('form');
const card= document.querySelector('.card');
const details= document.querySelector('.details');


// asyn function which syncs both js data
const newUi= (data)=>{
    const cityDetails= data.cityDetails;
    const weatherDetails= data.weatherDetails;
    // update the details in the dom
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
    // update the night and day icons
    const time= document.querySelector('.time');
    let timeSrc= null
    if(weatherDetails .IsDayTime){
       timeSrc= 'img/day.svg'
        
    }else{
       timeSrc= 'img/night.svg'
        
    }
    time.setAttribute('src', timeSrc);

    // updating the icons
    const icons = document.querySelector('.icons');
    const iconSrc= `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icons.setAttribute('src', iconSrc);

    
    // updating the weather conditions inside the dom

    
    details.innerHTML= `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
                    <div class="my-3">${weatherDetails.WeatherText}</div>
                    <div class="display-4 my-4">
                        <span>${weatherDetails.Temperature.Metric.Value}</span>
                        <span>&deg; C</span>
                        </div>
    
    
    `
    }

    
    // updating the card
    
// 
const update= async(city)=>{
    const cityDetails= await cityLocation(city);
    const weatherDetails= await getWeather(cityDetails.Key);
    return {
        cityDetails: cityDetails,
        weatherDetails: weatherDetails
    }
}



// event listner
form.addEventListener('submit',((e)=>{
e.preventDefault();

const userInput = form.city.value.trim();
form.reset();

update(userInput).then((data)=>{
     newUi(data);
     console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}))

//  