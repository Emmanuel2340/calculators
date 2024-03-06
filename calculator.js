const section = document.querySelector('section')
const view = document.querySelector('.view')
const view1 = document.querySelector('.views')
const btns = document.querySelectorAll('button')
const clears = document.querySelector('.clears')
const clear = document.querySelector('.clear')
const input = document.querySelector('input')
const parentBtn = document.querySelectorAll('.buttons')
const clearAll = document.querySelector('.clearAll')


function calc() {
    for (const btn of btns) {
        btn.addEventListener('click', () => {

            const first = './%-x²√∛⌫='
            const last = input.value.split(/[.]/)
            console.log(last)
            input.value += btn.textContent;
            try{
                if(first.match(input.value[0])){
                    input.value = ''
                }
            }catch(e){
                console.log(e)
            }
            const digit = input.value.split(/[*/+-]/g).filter(n => n !== '').map(n => Number(n));
            const sign = input.value.split(/[\d.x²√∛⌫]/g).filter(n => n !== '')[0];
            let result;
            let num;
            if (digit.length === 1 && sign !== '=' ? sign : '') {
                view1.textContent = input.value;
                input.value = '';
            }
            if (digit.length === 1 && btn.textContent === 'x²') {
                view1.textContent = input.value;
                num = input.value.split(/[x²]/).map(n => Number(n))[0];
                result = num * num
                input.value = result
            } else if (digit.length === 1 && btn.textContent === '√') {
                view1.textContent = input.value;
                num = input.value.split(/[√]/).map(n => Number(n))[0];
                result = Math.sqrt(num);
                input.value = result;

            } else if (digit.length === 1 && btn.textContent === '∛') {
                view1.textContent = input.value;
                num = input.value.split(/[∛]/).map(n => Number(n))[0];
                result = num ** 3;
                input.value = result;
            }
            let v1first = view1.textContent.split(/[*-+%/]/)[0];

            const v1 = v1first.split(/[-+/*]/).filter(n => n !== '').map(n => Number(n))[0]
            if (view1.textContent.includes('*') && input.value.trim().length) {
                if (btn.textContent === '=') {
                    const inputNum = input.value.split(/[=]/).map(n => Number(n))[0];
                    result = v1 * inputNum;
                    view1.textContent = ` ${v1} * ${input.value}  ${result}`
                    input.value = String(result).length > 10 ? result.toFixed(1) : result;
                }
            } else if (view1.textContent.endsWith('-') && input.value.trim().length) {
                if (btn.textContent === '=') {
                    const inputNum = input.value.split(/[=]/).map(n => Number(n))[0];
                    result = v1 - inputNum;
                    view1.textContent = ` ${v1} - ${input.value}  ${result}`
                    input.value = String(result).length > 10 ? result.toFixed(1) : result;
                }

            } else if (view1.textContent.endsWith('+') && input.value.trim().length) {
                if (btn.textContent === '=') {
                    const inputNum = input.value.split(/[=]/).map(n => Number(n))[0];
                    result = v1 + inputNum;
                    view1.textContent = ` ${v1} + ${input.value}  ${result}`
                    input.value = String(result).length > 10 ? result.toFixed(1) : result;
                }
            } else if (view1.textContent.endsWith('/') && input.value.trim().length) {
                if (btn.textContent === '=') {
                    const inputNum = input.value.split(/[=]/).map(n => Number(n))[0];
                    result = v1 / inputNum;
                    view1.textContent = ` ${v1} / ${input.value}  ${result}`
                    input.value = String(result).length > 10 ? result.toFixed(1) : result;
                }

            } else if (view1.textContent.endsWith('%') && input.value.trim().length) {
                if (btn.textContent === '=') {
                    const inputNum = input.value.split(/[=]/).map(n => Number(n))[0];
                    result = v1 % inputNum;
                    view1.textContent = ` ${v1} % ${input.value}  ${result}`
                    input.value = String(result).length > 10 ? result.toFixed(1) : result;
                }
            }


        })
    }
}
calc()


function deleteFromBack() {
    for (const btn of btns) {
        btn.addEventListener('click', () => {
            if (btn.textContent === '⌫') {
                const arr = Array.from(Array.from(input.value).join('').replace(input.value[input.value.length-1],''));
                arr.splice(arr.indexOf(arr.length - 1), 1)
                input.value = arr.join('')
            }
        })
    }
}

deleteFromBack()

function CE() {
    clear.addEventListener('click', () => {
        input.value = ''
        view1.textContent.endsWith('CE') ? view1.textContent = view1.textContent.replace('CE', '') : view1.textContent
    })
}
CE()

function C() {
    clearAll.addEventListener('click', () => {
        input.value = '';
        view1.textContent = ''
    })

}
C();