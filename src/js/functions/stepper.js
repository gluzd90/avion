const stepperEls = document.querySelectorAll(".stepper")
if(stepperEls) {
  stepperEls.forEach(stepperEl => {
    const stepperInput = stepperEl.querySelector(".stepper__input");
    const stepperBtnMinus = stepperEl.querySelector(".stepper__btn--minus");
    const stepperBtnPlus = stepperEl.querySelector(".stepper__btn--plus");

    const stepperMin = Number(stepperInput.getAttribute('min'));
    const stepperMax = Number(stepperInput.getAttribute('max'));
    let count = Number(stepperInput.value);

    stepperInput.addEventListener('change', () =>{
      if(stepperInput.value < stepperMin ) {
        stepperInput.value = stepperMin
        stepperBtnMinus.disabled  = true
        stepperBtnPlus.disabled  = false
        // stepperBtnMinus.classList.add('stepper__btn--disabled')
        // stepperBtnPlus.classList.remove('stepper__btn--disabled')
      }
    })

    stepperInput.addEventListener('change', () =>{
      if(stepperInput.value > stepperMax ) {
        stepperInput.value = stepperMax
        stepperBtnPlus.disabled = true
        // stepperBtnPlus.classList.add('stepper__btn--disabled')
        stepperBtnMinus.disabled = false
        // stepperBtnMinus.classList.remove('stepper__btn--disabled')
      }
    })

    stepperBtnPlus.addEventListener('click', () => {
      let count = Number(stepperInput.value);
      if(count < stepperMax) {
        stepperBtnPlus.disabled = false
        stepperBtnMinus.disabled = false
        // stepperBtnPlus.classList.remove('stepper__btn--disabled')
        // stepperBtnMinus.classList.remove('stepper__btn--disabled')
        count ++
        stepperInput.value = count
      }
      if(count === stepperMax) {
        // stepperBtnPlus.classList.add('stepper__btn--disabled')
        stepperBtnPlus.disabled = true
      }
    })

    stepperBtnMinus.addEventListener('click', () => {
      let count = Number(stepperInput.value);
      if(count > stepperMin) {
        stepperBtnPlus.disabled = false
        stepperBtnMinus.disabled = false
        // stepperBtnMinus.classList.remove('stepper__btn--disabled')
        // stepperBtnPlus.classList.remove('stepper__btn--disabled')
        count--
        stepperInput.value = count
      }
      if(count === stepperMin) {
      // stepperBtnMinus.classList.add('stepper__btn--disabled')
      stepperBtnMinus.disabled = true
      }
    })
  })

}

