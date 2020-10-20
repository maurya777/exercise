#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the pageCount function below.
 */
int pageCount(int n, int p) {
    /*
    1,23,45,67,89,1011,1213
    */
    if (p==1) return 0;
    if (p==n) return 0;
    if ((n%2) == 1 && p == (n-1) ) return 0;
    if ((n%2) == 0 && p > (n-3) ) return 1;
    if (p <= (n/2)) return p/2;
    return (n-p)/2;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    int p;
    cin >> p;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    int result = pageCount(n, p);

    fout << result << "\n";

    fout.close();

    return 0;
}
