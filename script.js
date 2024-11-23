function input(value) {
    const result = document.getElementById('result');
    result.value += value;
  }
  
  function clearAll() {
    document.getElementById('result').value = '';
  }
  
  function backspace() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    const result = document.getElementById('result');
    try {
      result.value = eval(result.value.replace(/÷/g, '/').replace(/×/g, '*'));
    } catch (error) {
      result.value = 'Error';
    }
  }
  