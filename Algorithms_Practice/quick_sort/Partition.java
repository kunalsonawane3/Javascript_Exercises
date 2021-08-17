import java.util.Arrays;

class Partition {
  
  static void swap(int[] arr, int f, int s){
    int temp = arr[f];
    arr[f] = arr[s];
    arr[s] = temp;
  }

  static int partition(int[] arr,int p,int r){
    int pivot = arr[r];
    int i = p - 1;

    for (int j = p; j < r; j++){
      if (arr[j] <= pivot){
        i++;

        swap(arr, arr[j], arr[i]);
      }
      
    }
    swap(arr, arr[i+1], arr[r]);

    return (i+1);
  }

  // driver code

  public static void main(String args[]){
    int[] arr = {9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6};
    int pr = partition(arr, 0, arr.length-1);

    System.out.println("Array after partitioning: " + Arrays.toString(arr));
  }
}