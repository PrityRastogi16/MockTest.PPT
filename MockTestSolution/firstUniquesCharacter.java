 

  class Assignment3
      {
        public static int firstUniqueChar(String str)
        {
           int[] freq = new int[26];
           for(char c: str.toCharArray()){
               freq[c - 'a']++;
           }
            for(int i = 0; i<str.length(); i++){
                if(freq[str.charAt(i) - 'a'] == 1){
                    return i;
                }
            }
            return -1;
        }
         
        public static void main(String[] args)
        {
            String str = "loveleetcode";
           
            int ans = firstUniqueChar(str);
            System.out.println(ans);
        }
    }	