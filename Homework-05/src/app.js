
     
     
// using async and await to fetch data

const profiles = [
     {
          imgId: 1,
          sources: 'https://img.freepik.com/free-vector/cute-girl-student-uniform-holding-meatballs-bag-education-thailand-school-concept-cartoon-hand-drawn-cartoon-art-illustration_56104-1058.jpg?t=st=1735364781~exp=1735368381~hmac=32d827cb475de3b1b8f74ef65af970facf49efcbfc14e2b2dfbae6bdc0b89f70&w=900'
     },
     {
          imgId: 2,
          sources: 'https://img.freepik.com/free-vector/cute-girl-astronaut-with-peace-hand-cartoon-vector-icon-illustration-people-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4080.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },
     {
          imgId: 3,
          sources: 'https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },

     {
          imgId: 4,
          sources: 'https://img.freepik.com/free-vector/cute-people-playing-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4043.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },
     
     {
          imgId: 5,
          sources: 'https://img.freepik.com/free-vector/cute-boy-with-peace-sign-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3946.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },
     
     {
          imgId: 6,
          sources: 'https://img.freepik.com/free-vector/hand-drawn-laughing-cartoon-illustration_23-2150464930.jpg?t=st=1735365930~exp=1735369530~hmac=2e1d0403d26e9bf04d0c880c6849ebc76fe4f1b3a487b17c3650a668f96f5f34&w=740'
     },
     
     {
          imgId: 7,
          sources: 'https://img.freepik.com/free-photo/full-shot-girl-with-dog-outdoors_23-2151061850.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },
     
     {
          imgId: 8,
          sources: 'https://img.freepik.com/free-vector/cute-vampire-chinese-cartoon-vector-icon-illustration-people-holiday-icon-concept-isolated-flat_138676-6926.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },
     
     {
          imgId: 9,
          sources: 'https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },
     
     {
          imgId: 10,
          sources: 'https://img.freepik.com/free-photo/full-shot-girl-spending-time-outdoors_23-2151061780.jpg?ga=GA1.1.691277172.1732179534&semt=ais_hybrid'
     },
]


async function fetchData() {
     const inputData = document.querySelector('#input-data');
     const human_Name = document.querySelector('#human-name');
     const userProfile = document.querySelector('#user-profile');
     const huamnUsername = document.querySelector('#huamn-username');
     const emails = document.querySelector('#email');
     const streets = document.querySelector('#streets');
     const suites = document.querySelector('#suite');
     const cities = document.querySelector('#mycity');
     const zipcodes = document.querySelector('#zipcode');
     const lats = document.querySelector('#lat');
     const lngs = document.querySelector('#lng');
     const phoneNumber = document.querySelector('#ph-numbers');
     const websites = document.querySelector('#website');
     const names = document.querySelector('#name');
     const catchPhrases = document.querySelector('#catchPhrase');
     const bses = document.querySelector('#bs');
     const errors = document.querySelector('#errors');
     
     
     try {
          const getData = parseInt(document.querySelector('#getData').value, 10);
          const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
     
          
          // if fetching is failed display error
          if (!response.ok) {
               throw new Error(" Coudn't fetch Data!");
          }
          
          // store array inside a json() file
          const datas = await response.json();
          
          // destruct object from array using for loop of
          for (let data of datas) {
               
               // destruct object after loop
               const { id, name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website, company: { name: companyName, catchPhrase, bs } } = data;
          
               for (let imgs of profiles) {
               const { imgId, sources } = imgs;
                    
                    if (getData === imgId) {
                         userProfile.src = sources;
                    }
          }
               
               // some conditions, we don't want users to input
               if (getData === 0 || getData > 10) {
                    errors.style.color = 'red';
                    errors.innerHTML = "Error input data!";                    
               }
               
               else if (getData === id) {
                    errors.style.color = 'green';
                    errors.innerHTML = 'Successful!';
                    human_Name.value = name;
                    huamnUsername.value = `@${username}`;
                    emails.value = email;
                    streets.value = street;
                    suites.value = suite;
                    cities.value = city;
                    zipcodes.value = zipcode;
                    lats.value = lat;
                    lngs.value = lng;
                    phoneNumber.value = phone;
                    websites.value = website;
                    names.value = companyName;
                    catchPhrases.value = catchPhrase;
                    bses.value = bs;
               }
               
          }
     }
     
     // Catch and display error
     catch (error) {
          console.error(`${error.message}`);
     }
}