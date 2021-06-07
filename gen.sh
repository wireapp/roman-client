set -e
src="https://roman.integrations.zinfra.io/swagger.json"
#src="${1}"
out="src/app/generated"

# clean the repo
if [[ -d "${out}" ]]
then
  rm -rf "${out}"
fi

# generate stubs
openapi-generator-cli generate \
  -g typescript-fetch \
	-i "${src}" \
	-o "${out}"

# cleanup
rm -rf "${out}/.openapi-generator" "${out}/.openapi-generator-ignore"
