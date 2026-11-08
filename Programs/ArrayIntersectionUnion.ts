const nums1 = [1, 2, 2, 3, 4];
const nums2 = [2, 3, 5];

// Intersection of array - way 1
const set2 = new Set(nums2);
console.log(nums1.filter(item => set2.has(item))); // Output : 2, 2, 3

// Intersection of array - way 2
console.log(nums1.filter(item => nums2.includes(item))); // Output : 2, 2, 3
console.log(nums1.filter(item => !nums2.includes(item))); // Output : 1 and 4. 

// Union of array.
console.log([...new Set([...nums1, ...nums2])]);
