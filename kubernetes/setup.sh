istioctl install
kubectl label namespace default "istio-injection=enabled"

kubectl rollout restart deployment -n default

