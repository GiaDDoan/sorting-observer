const merge = (
    items: number[],
    aux: number[],
    animArr: number[][],
    low: number,
    mid: number,
    high: number
) => {
    for(let k = low; k <= high; k++) {
        aux[k] = items[k];
    }

    let i = low, j = mid + 1;
    for (let k = low; k <= high; k++) {
        if(i > mid) {
            animArr.push([aux[j], k]);
            items[k] = aux[j++];
        } else if (j > high) {
            animArr.push([aux[i], k]);
            items[k] = aux[i++];
        } else if(aux[i] <= aux[j]) {
            animArr.push([aux[i], k]);
            items[k] = aux[i++];
        } else {
            animArr.push([aux[j], k]);
            items[k] = aux[j++];
        }
    }
}

export const getMergeSortAnims = (
    items: number[],
    aux: number[],
    animArr: number[][],
    low: number,
    high: number
) => {
    if(low >= high) return;

    const mid = low + Math.floor((high - low) / 2);

    getMergeSortAnims(items, aux, animArr, low, mid);
    getMergeSortAnims(items, aux, animArr, mid + 1, high);
    merge(items, aux, animArr, low, mid, high);
}