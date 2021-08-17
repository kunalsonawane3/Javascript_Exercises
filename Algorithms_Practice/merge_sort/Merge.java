import java.lang.Math;

class Merge {
  // merge method
  void mergeArr(int arr[], int p, int q, int r){
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

  // driver code
  public static void main(String args[]){
    int arr[] = {3, 7, 12, 14, 2, 6, 9, 11};
    Merge obj = new Merge();
    obj.mergeArr(arr, 0, Math.round((arr.length-1)/2), arr.length-1);
    System.out.println("After merging: ");
    for (int i : arr){
      System.out.print(i + " ");
    }
    System.out.println();

  }
}