//Optional Parameter
// tanda ? agar tidak wajib
//Tidak boleh optional dipakai untuk number

const getAge = (val1: string, val2?: string): string => {
  return val1;
};
console.log(getAge("30"));
