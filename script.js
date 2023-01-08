let A = [11,10,15,1,6,3]
let divs = []

let mergeSortDivs = []

// ---------- Algorithm implementations along with visualization logic -------------

async function bubbleSort(arr){
    // length of array
    len_of_arr = arr.length

    //outer array
    for(let i= 0; i < len_of_arr-1; i++){
        let has_been_swapped = false

        // inner array
        for(let j = 0; j < len_of_arr-1; j++){
            if(arr[j] > arr[j+1]){
                await delay(1500);
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];

                // changing background colors for better
                // visualization
                divs[j+1].style.backgroundColor = "green";
                divs[j].style.backgroundColor = "red";

                await delay(1500);

                [divs[j+1], divs[j]] = [divs[j], divs[j+1]];
                setToWhite();
                
                createDivs(); // swap
                has_been_swapped = true
                console.log(A);
            }
            else if(arr[j] < arr[j+1]){
                await delay(1500);
                divs[j+1].style.backgroundColor = "yellow";
                divs[j].style.backgroundColor = "yellow";

                await delay(1500);

                setToWhite();
            }
        }

        if(has_been_swapped === false){
            break
        }
    }
}


function mergeSort(arr){

    let i = 0; // left iterator
    let j = 0; // right iterator
    let k = 0; // given array iterator

    if(arr.length > 1){

        // find the middle section of the array and the divs array
        const middleIndex = Math.floor(arr.length / 2);

        // split the array into left and right using the middle index
        let leftArr = arr.slice(0, middleIndex);
        let rightArr = arr.slice(middleIndex);

        console.log(arr);

        // keep splitting the left and right until they are single elements
        mergeSort(leftArr); 
        mergeSort(rightArr);

        // start the sorting part
        while(i < leftArr.length && j < rightArr.length){
            if(leftArr[i] <= rightArr[j]){
                arr[k] = leftArr[i];
                i+=1
            }
            else{
                arr[k] = rightArr[j];
                j+=1
            }
            k+=1
        }

        /*
        Using these loops to collect any other element left
        this also solves the issue with the uneven amount of numbers in the array
        */
        while(i < leftArr.length){
            arr[k] = leftArr[i]
            i+=1 
            k+= 1
        }   

        while(j < rightArr.length){
            arr[k] = rightArr[j]
            j+=1 
            k+= 1
        }
    }
}

function splitDivsArr(arr){
    if(arr.length > 1){
        
        // find the middle section of the array and the divs array
        const middleIndex = Math.floor(arr.length / 2);

        // split the array into left and right using the middle index
        let leftArr = arr.slice(0, middleIndex);
        let rightArr = arr.slice(middleIndex);

        console.log(arr);

        // keep splitting the left and right until they are single elements
        splitDivsArr(leftArr); 
        splitDivsArr(rightArr);
    }
}



//------------- Functions responsible for the front-end -------------

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function setToWhite(){
    for(let i = 0; i<divs.length; i++){
        divs[i].style.backgroundColor = "white";
    }
}

function createDivs(){
    // adds the divs to the main wrapper as children
    for(let i = 0; i<A.length; i++){
        divs.push(document.createElement("div"))
        document.getElementById("bubbleSort-wrapper").appendChild(divs[i])
    }
    console.log(divs);

    // styles the added divs so they look like cards
    for(let i = 0; i<divs.length; i++){
        divs[i].innerHTML = A[i]
        divs[i].style.width = "100px"
        divs[i].style.height = "100px"
        divs[i].style.border = "1px black solid"
        divs[i].style.fontSize = "25px"

    }
}

function createDivsMergeSort(){
    // adds the divs to the main wrapper as children
    for(let i = 0; i<A.length; i++){
        mergeSortDivs.push(document.createElement("div"))
        document.getElementById("mergeSort-wrapper").appendChild(mergeSortDivs[i])
    }
    console.log(mergeSortDivs);

    // styles the added divs so they look like cards
    for(let i = 0; i<mergeSortDivs.length; i++){
        mergeSortDivs[i].innerHTML = A[i]
        mergeSortDivs[i].style.width = "100px"
        mergeSortDivs[i].style.height = "100px"
        mergeSortDivs[i].style.border = "1px black solid"
        mergeSortDivs[i].style.fontSize = "25px"

    }
}

// bubbleSort(A);
// createDivs();

// ------------

mergeSort(A);
createDivsMergeSort();
splitDivsArr(mergeSortDivs);
console.log(A);