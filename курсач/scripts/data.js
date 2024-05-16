
function loadXMLDoc(filename) {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        displayService(this);
      }
    };
    
    xhttp.open("GET", filename, true);
    xhttp.send();
  }

    let checkboxesString = [];

    function displayService(xml) {
    let i;
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("услуга");

   
    let container = document.querySelector(".checkbox__wrapper");  
    let page2 = document.querySelector(".page2");
    
    

    for (i = 0; i < x.length; i++) {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox';

        const textWrapperDiv = document.createElement('div');
        textWrapperDiv.className = 'text__wrapper';

        const nameH2 = document.createElement('h2');
        nameH2.className = 'name';
        

        const costP = document.createElement('p');
        costP.textContent = 'Стоимость: ';

        const costSpan = document.createElement('span');
        costSpan.className = 'cost';


        costP.appendChild(costSpan);
        textWrapperDiv.appendChild(nameH2);
        textWrapperDiv.appendChild(costP);

        const checkDiv = document.createElement('div');
        checkDiv.className = 'check';

        const checkImg = document.createElement('img');
        checkImg.src = '/img/svg/icons8-галочка.svg';
        checkImg.alt = '';

        checkDiv.appendChild(checkImg);

        checkboxDiv.appendChild(textWrapperDiv);
        checkboxDiv.appendChild(checkDiv);

        container.appendChild(checkboxDiv);
    
        document.getElementsByClassName("name")[i].textContent = x[i].getElementsByTagName("название")[0].childNodes[0].nodeValue ;
      
        document.getElementsByClassName("cost")[i].textContent = x[i].getElementsByTagName("стоимость")[0].childNodes[0].nodeValue ;
      
        //вторая страница
           
        const serviceContainerDiv = document.createElement('div');
        serviceContainerDiv.className = 'service__container'; 

        const serviceNameH2 = document.createElement('h2');
        serviceNameH2.className = 'service__name';
        

        const serviceCostP = document.createElement('p');
        serviceCostP.textContent = 'Стоимость: ';

        const serviceCostSpan = document.createElement('span');
        serviceCostSpan.className = 'service__cost';

        const serviceDescriptionP = document.createElement('p');
        serviceDescriptionP.className = 'service__description';


        page2.appendChild(serviceContainerDiv);
        serviceContainerDiv.appendChild(serviceNameH2);
        serviceContainerDiv.appendChild(serviceCostP);
        serviceCostP.appendChild(serviceCostSpan)
        serviceContainerDiv.appendChild(serviceDescriptionP);
        
        document.getElementsByClassName("service__name")[i].textContent = x[i].getElementsByTagName("название")[0].childNodes[0].nodeValue ;
      
        document.getElementsByClassName("service__cost")[i].textContent = x[i].getElementsByTagName("стоимость")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("service__description")[i].textContent = x[i].getElementsByTagName("описание")[0].childNodes[0].nodeValue;
        
        checkboxesString[i] = x[i].getElementsByTagName("стоимость")[0].getAttribute("стоимость");

    }
    
   

  }
  


  loadXMLDoc("/xml/data.xml");

  let xhttp2 = new XMLHttpRequest();
    
  
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displayServiceHouses(this);
    }
  };

  xhttp2.open("GET", "/xml/houses.xml", true);
  xhttp2.send();
  
  let checkboxesString2 = [];

  function displayServiceHouses(xml) {
    let i;
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("дом");
    let amount_img = xmlDoc.getElementsByTagName("изображения");
    
    container = document.querySelector(".houses");
    housesContainer = document.querySelector(".houses__container");
    
    for(let i = 0; i < x.length; i++) {

        const houseDiv = document.createElement('div');
        houseDiv.className = 'house';

        const textWrapperDiv = document.createElement('div');
        textWrapperDiv.className = 'text__wrapper';

        const nameH2 = document.createElement('h2');
        nameH2.className = 'name';
        

        const costP = document.createElement('p');
        costP.textContent = 'Стоимость: ';

        const costSpan = document.createElement('span');
        costSpan.className = 'cost';

        const mestaP = document.createElement('p');
        mestaP.textContent = 'Количество мест: ';

        const mestaSpan = document.createElement('span');
        mestaSpan.className = 'mesta';


        costP.appendChild(costSpan);
        mestaP.appendChild(mestaSpan);
        textWrapperDiv.appendChild(nameH2);
        textWrapperDiv.appendChild(costP);
        textWrapperDiv.appendChild(mestaP);

        const checkDiv = document.createElement('div');
        checkDiv.className = 'check';

        const checkImg = document.createElement('img');
        checkImg.src = '/img/svg/icons8-галочка.svg';
        checkImg.alt = '';

        checkDiv.appendChild(checkImg);

        houseDiv.appendChild(textWrapperDiv);
        houseDiv.appendChild(checkDiv);

        container.appendChild(houseDiv);

        document.getElementsByClassName("name")[i].textContent = x[i].getElementsByTagName("название")[0].childNodes[0].nodeValue ;
      
        document.getElementsByClassName("cost")[i].textContent = x[i].getElementsByTagName("стоимость")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("mesta")[i].textContent = x[i].getElementsByTagName("места")[0].childNodes[0].nodeValue;

        //третья страница

        const houseContainerDiv = document.createElement('div');
        houseContainerDiv.className = 'house__container'; 
           
        const houseSliderWrapper = document.createElement('div');
        houseSliderWrapper.className = 'slider__wrapper';
       
        const houseImgContainerDiv = document.createElement('div');
        houseImgContainerDiv.className = 'swiper'; 

        
        const houseSwiperWrapper = document.createElement('div');
        houseSwiperWrapper.className = 'swiper-wrapper'; 

        const houseSliderContainer = document.createElement('div');
        houseSliderContainer.className = 'slider-container'; 

        const houseTextContainer = document.createElement('div'); 

        const houseButtonPrev = document.createElement('div');
        houseButtonPrev.className = 'swiper-button-prev'; 

        const houseButtonNext = document.createElement('div');
        houseButtonNext.className = 'swiper-button-next'; 

        const houseNameH2 = document.createElement('h2');
        houseNameH2.className = 'house__name';
        

        const houseCostP = document.createElement('p');
        houseCostP.textContent = 'Стоимость: ';

        const houseCostSpan = document.createElement('span');
        houseCostSpan.className = 'house__cost';

        const houseDescriptionP = document.createElement('p');
        houseDescriptionP.className = 'house__description';


        housesContainer.appendChild(houseContainerDiv);

        let size = amount_img[i].getElementsByTagName("изображение").length

      

        for (let m = 0; m < size; m++) {
          const houseSwiperSlide = document.createElement('div');
          houseSwiperSlide.className = 'swiper-slide'; 
          const houseImg = document.createElement('img'); 
          houseImg.className = 'house__img'; 
          houseImg.setAttribute('src', amount_img[i].getElementsByTagName("изображение")[m].getAttribute("src")); 
          houseSwiperSlide.appendChild(houseImg); 
          houseSwiperWrapper.appendChild(houseSwiperSlide);
        }
       

       
        houseContainerDiv.appendChild(houseNameH2);
        houseImgContainerDiv.appendChild(houseSwiperWrapper);
        houseSliderContainer.appendChild(houseImgContainerDiv);
        houseContainerDiv.appendChild(houseSliderContainer);

     
        houseTextContainer.appendChild(houseCostP);
        houseCostP.appendChild(houseCostSpan);
        houseTextContainer.appendChild(houseDescriptionP);
        houseContainerDiv.appendChild(houseTextContainer);
       
        
        document.getElementsByClassName("house__name")[i].textContent = x[i].getElementsByTagName("название")[0].childNodes[0].nodeValue ;
      
        document.getElementsByClassName("house__cost")[i].textContent = x[i].getElementsByTagName("стоимость")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("house__description")[i].textContent = x[i].getElementsByTagName("описание")[0].childNodes[0].nodeValue;

      
        
        checkboxesString2[i] = x[i].getElementsByTagName("стоимость")[0].getAttribute("стоимость");
    }
  }

  document.getElementById('result').addEventListener("click", function() {
    let result = 0;
    let checkboxesNum = checkboxesString.map(item => +item);
    let checkboxes2Num = checkboxesString2.map(item => +item);
    for (let i = 0; i < checkboxesNum.length; i++) {
      if (document.getElementsByClassName("checkbox")[i].classList.contains('active') == true) {
        result += checkboxesNum[i];
      }
      
    }
    for (let i = 0; i < checkboxes2Num.length; i++) {
      if (document.getElementsByClassName("house")[i].classList.contains('active') == true) {
        result += checkboxes2Num[i];
      }
      
    }

    
    document.querySelector(".total").textContent = 'Итого: ' + result + 'р.'
  })
  
  