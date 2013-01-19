#start
echo "# starting build"

# getting dependencies
echo "# bower is getting dependencies"
bower install

# compiling sources
echo "# node is compiling"
node r.js -o app.build.js

# cleaning build
echo "# cleaning up"
rm -rf ../../dist/build.txt
rm -rf ../../dist/build/
rm -rf ../../dist/vendor/

# end
echo "# build done"