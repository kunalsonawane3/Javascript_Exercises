class MergeSort {
  // merge function
  void merge(int arr[], int p, int q, int r){
    int n1 = q - p + 1;
    int n2 = r - q;

    int L1[] = new int[n1];
    int L2[] = new int[n2];
    
    for (int i=0; i < n1; i++){
      L1[i] = arr[p+i];
    }
    for (int j=0; j < n2; j++){
      L2[j] = arr[q+1+j];
    }
    // crating final array
    int i = 0; 
    int j = 0;
    int k = p;

    while (i < n1 && j < n2){
      if (L1[i] < L2[j]){
        arr[k] = L1[i];
        i++;
      }
      else{
        arr[k] = L2[j];
        j++;
      }
      k++;
    }

    while (i < n1){
      arr[k] = L1[i];
      i++;
      k++;
    }

    while (j < n2){
      arr[k] = L2[j];
      j++;
      k++;
    }
  
  }
  // method for Merge Sort 
  void mergeSort(int arr[], int s, int e){
    if (s < e){
      int m = (s + e)/2;
      mergeSort(arr, s, m);
      mergeSort(arr, m+1, e);
      merge(arr, s, m, e);
    }
  }
  // method for printing arra
  static void printArr(int arr[]){
    for (int i : arr){
      System.out.print(i + " ");
    }
    System.out.println();
  }
  public static void main(String args[]){
    int arr[] = {14, 7, 3, 12, 9, 11, 6, 2};
    MergeSort ob = new MergeSort();
    ob.mergeSort(arr, 0, arr.length-1);
    System.out.println("Array after sorting: " );
    printArr(arr);
  }
}