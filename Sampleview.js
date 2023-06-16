function getDashboardData(){

    getValueofAvailableProduct()
    getValueofProductPrice()
    getValueofCustomersOrder()
    getValueofTotalTransaction()

}

function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 2 seconds');
        }, 2000);
    });
}
function resolveAfter3Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 2 seconds');
        }, 3000);
    });
}
function resolveAfter4Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 2 seconds');
        }, 4000);
    });
}
function resolveAfter5Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 2 seconds');
        }, 5000);
    });
}

//Report and Statistics
async function getValueofAvailableProduct() {
    try {
      const response = await fetch('http://localhost:8080/dashview');
      const html = await response.text();
  
      // Parse the HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
      // Find the <h3> element and extract its value
      const element = doc.getElementById('Available Products');
      const value = element.textContent;
      
      console.log('Retrieving Available Products');
      const result = await resolveAfter2Seconds();
      console.log("Available Products: " +value); 
      return value;
    } catch (error) {
      console.error(error);
    }
  }

  //Residents
    async function getValueofProductPrice() {
    try {
      const response = await fetch('http://localhost:8080/dashview');
      const html = await response.text();
  
      // Parse the HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
      // Find the <h3> element and extract its value
      const element = doc.getElementById('Product Price');
      const value = element.textContent;
      
      console.log('Retrieving Product Price');
      const result = await resolveAfter3Seconds();
      console.log("Product Price: " + value); 
      return value;
    } catch (error) {
      console.error(error);
    }
  }
    //User Registered
    async function getValueofCustomersOrder() {
        try {
          const response = await fetch('http://localhost:8080/dashview');
          const html = await response.text();
      
          // Parse the HTML string
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
      
          // Find the <h3> element and extract its value
          const element = doc.getElementById('Customers Order');
          const value = element.textContent;
          
          console.log('Retrieving Customers Order');
          const result = await resolveAfter4Seconds();
          console.log("Customers Order: " + value); 
          return value;
        } catch (error) {
          console.error(error);
        }
      }
        //Barangay Officials
    async function getValueofTotalTransaction() {
        try {
          const response = await fetch('http://localhost:8080/dashview');
          const html = await response.text();
      
          // Parse the HTML string
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
      
          // Find the <h3> element and extract its value
          const element = doc.getElementById('Total Transaction');
          const value = element.textContent;
          
          console.log('Retrieving Total Transaction');
          const result = await resolveAfter5Seconds();
          console.log("Total Transaction: " + value); 
          return value;
        } catch (error) {
          console.error(error);
        }
      }
  
  window.onload =  getDashboardData();