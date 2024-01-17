document.getElementById('module-name-input').addEventListener('input', function () {
        const moduleName = this.value.trim();
        if (moduleName !== "") {
            // Replace the following URLs with the actual APIs
            const videosApiUrl = `https://api.example.com/videos?module=${moduleName}`;
            const coursesApiUrl = `https://api.example.com/courses?module=${moduleName}`;
            const aiHelpersApiUrl = `https://api.example.com/ai-helpers?module=${moduleName}`;
            const otherResourcesApiUrl = `https://api.example.com/other-resources?module=${moduleName}`;

            // Call your Fetch function with these URLs
            fetchResources(videosApiUrl, 'videos-container');
            fetchResources(coursesApiUrl, 'courses-container');
            fetchResources(aiHelpersApiUrl, 'ai-helpers-container');
            fetchResources(otherResourcesApiUrl, 'other-resources-container');
        }
    });

    // Define your Fetch function
    function fetchResources(apiUrl, containerId) {
        // Implement your Fetch logic here
        // Fetch data from apiUrl and update the content in the container with ID containerId
    }
