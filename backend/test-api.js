async function testApi() {
  try {
    console.log('Testing 127.0.0.1:5001...');
    const res = await fetch('http://127.0.0.1:5001/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: 'say hello',
        contentType: 'Blog',
        tone: 'Professional'
      })
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.log('API returned error:', res.status, errorText);
    } else {
      const data = await res.json();
      console.log('SUCCESS API:', data);
    }
  } catch (error) {
    console.log('Network error:', error.message);
  }
}

testApi();
