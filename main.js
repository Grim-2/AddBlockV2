document.addEventListener("DOMContentLoaded", function() {
    // Get all ad containers
    const adContainers = document.querySelectorAll('.ad-container');
    const endMessage = document.querySelector('.end-message'); // Get the end message container
    
    // Function to set up interactions for each ad
    adContainers.forEach(ad => {
      const planks = ad.querySelectorAll('.plank'); // Get all planks for the ad
      const closeButton = ad.querySelector('.close-btn');
  
      // When any plank is clicked, hide it, and show the close button only after all planks are clicked
      let planksRemoved = 0;
  
      planks.forEach(plank => {
        plank.addEventListener('click', function() {
          plank.style.display = 'none'; // Hide the clicked plank
          planksRemoved++;
  
          // Open the link from the plank
          const link = plank.getAttribute('data-link'); // Get the link from the plank's data-link attribute
          window.open(link, '_blank'); // Open the link in a new tab
  
          // Show close button only when all planks are removed
          if (planksRemoved === planks.length) {
            closeButton.style.opacity = '1'; // Show the close button
          }
        });
      });
  
      // When the close button (X) is clicked, hide the ad only if all planks are removed
      closeButton.addEventListener('click', function() {
        if (planksRemoved === planks.length) {
          ad.style.display = 'none'; // Hide the entire ad container
        }
      });
    });
  
    // Function to display the end message when all planks are clicked
    document.addEventListener("click", function() {
      // Check if all planks have been removed for all ads
      const allPlanksClicked = Array.from(adContainers).every(ad => {
        const planks = ad.querySelectorAll('.plank');
        return Array.from(planks).every(plank => plank.style.display === 'none');
      });

      // If all planks are clicked, show the end message
      if (allPlanksClicked) {
        endMessage.style.display = 'block'; // Show the message
      }
    });
});
