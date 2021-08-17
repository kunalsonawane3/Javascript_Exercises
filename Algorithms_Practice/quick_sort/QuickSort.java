import java.util.Arrays;

class QuickSort {
  //  method to find partition position
  static int partition(int[] arr,int p,int r){
    int pivot = arr[r];
    int i = p - 1;

    for (int j = p; j < r; j++){
      if (arr[j] <= pivot){
        i++;

        int temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      
    }
    int temp = arr[r];
    arr[r] = arr[i+1];
    arr[i+1] = temp;

    return (i+1);

  }
  // quick sort method
  static void quickSort(int[] arr, int p, int r){
    if (p < r){
      int pr = partition(arr, p, r);
      //recursive call on left of pivot
      quickSort(arr, p, pr-1);
      //recursive call on right of pivot
      quickSort(arr, pr+1, r);

    }

  }

  // driver code

  public static void main(String args[]){
    int[] arr = {9, 7, 5, 11, 12, 2, 14, 3, 10, 6};
    System.out.println("Before sorting: " + Arrays.toString(arr));

    quickSort(arr, 0, arr.length-1);
    System.out.println("After sorting: " + Arrays.toString(arr));
  }
}