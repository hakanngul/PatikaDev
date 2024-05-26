def selection_sort_steps(arr, steps):
    for i in range(steps):
        min_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
        print(arr)

array = [7, 3, 5, 8, 2, 9, 4, 15, 6]
print("Selection Sort İlk 4 Adım:")
selection_sort_steps(array, 4)
